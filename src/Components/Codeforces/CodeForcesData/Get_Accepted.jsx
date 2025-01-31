import { Contestant } from './Contestant';
import { Get_Seeds } from './Get_Seeds';

let Contestants = [], Contests = [], StandingData = [['Handle \\ Sheet', 'Total']];

function cmp(a, b) {
  if (a[1] == b[1]) {
    return (a[0] < b[0] ? -1 : 1); // handle's links
  }
  return (a[1] > b[1] ? -1 : 1); // total ac
}

export async function Get_Accepted(callback) {
  let [handlesList, standings] = Get_Seeds();
  let standingNumber = -1;

  for (let standing of standings) {
    standingNumber++;
    let lastContestants = {};

    for (let page = 1; ; page++) {
      let link = `https://api.scraperapi.com/?api_key=27e61be1a3defcd52a5ba98456c4dbf3&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/${standing[0]}/c/${standing[1]}/p/${page}/l/${handlesList}`;
      
      let response = await fetch(link);
      let res = await response.json();
      res = res['result'];

      if (page == 1) {
        let standingLink = res.contest.link;
        let standingName = res.contest.name;
        let standingProblems = res.contest.problems.length;
        Contests.push(standingProblems);
        StandingData[0].push(`<h2><a href="${standingLink}" target="_blank">${standingName}</a></h2>`);
        console.log(standingName);
      }

      if (Object.keys(res.contestants).length === 0 || JSON.stringify(res.contestants) === JSON.stringify(lastContestants)) {
        break;
      }

      lastContestants = res.contestants;
      let contestantsObj = res.contestants;

      for (const handle in contestantsObj) {
        let [newContestant, contestant] = Contestant.getContestant(handle);
        if (newContestant) {
          Contestants.push(contestant);
        }
        contestant.AddProblems(standingNumber, contestantsObj[handle].ac);
      }
    }
  }

  let contestantsData = [];
  for (let contestant of Contestants) {
    let problems = contestant.GetAcceptedArray(Contests, standingNumber);
    let totalAccepted = contestant.GetTotalAccepted();
    let handleLink = `<a href="https://codeforces.com/profile/${contestant.handle}" target="_blank">${contestant.handle}</a>`;
    
    contestantsData.push([handleLink, totalAccepted, ...problems]);
  }

  contestantsData.sort(cmp);
  StandingData.push(...contestantsData);

  // حفظ البيانات في localStorage
  localStorage.setItem('standingData', JSON.stringify(StandingData));
  localStorage.setItem('lastUpdated', new Date().getTime());

  console.log(StandingData);
  
  callback(StandingData); // إرجاع البيانات عبر callback
}