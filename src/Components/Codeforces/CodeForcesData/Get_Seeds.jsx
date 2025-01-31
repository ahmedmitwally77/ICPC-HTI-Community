export function Get_Seeds() {
    // الروابط التي قمت بتوفيرها
    const links = [
      "https://codeforces.com/list/85a400b8c2cae716a8d71b9561b523b4",
      "https://codeforces.com/group/WrIZm2zHiL/contest/560740",
      "https://codeforces.com/group/WrIZm2zHiL/contest/562542",
      "https://codeforces.com/group/WrIZm2zHiL/contest/563052",
      "https://codeforces.com/group/WrIZm2zHiL/contest/564666",
      "https://codeforces.com/group/WrIZm2zHiL/contest/568330",
      "https://codeforces.com/group/WrIZm2zHiL/contest/569054",
      "https://codeforces.com/group/WrIZm2zHiL/contest/569909",
      "https://codeforces.com/group/WrIZm2zHiL/contest/571515",
      "https://codeforces.com/group/WrIZm2zHiL/contest/573504",
      "https://codeforces.com/group/WrIZm2zHiL/contest/574148",
    ];
  
    // استخراج handles من الرابط الأول
    const handlesList = links[0].split('/list/')[1];
  
    // استخراج روابط المسابقات
    const contestLinks = links.slice(1).map(link => {
      let path = link.split("/group/")[1];
      let groupName = path.split("/")[0];
      let contestNumber = path.split("/")[2];
      return [groupName, contestNumber];
    });
  
    return [handlesList, contestLinks];
  }