import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const AddSessions = () => {

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [sessionPdf, setsessionPdf] = useState('');
    const [content, setContent] = useState('');
    const [levelId, setLevelId] = useState('');
    const [waveId, setWaveId] = useState('');
    const [levels, setLevels] = useState([]);
    const [waves, setWaves] = useState([]);

    useEffect(() => {
        const fetchLevels = async () => {
          const levelsCollection = collection(db, 'levels'); // assuming 'levels' is the name of your collection for levels
          const levelsSnapshot = await getDocs(levelsCollection);
          const levelsList = levelsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setLevels(levelsList);
        };
    
        fetchLevels();
      }, []);

      useEffect(() => {
        const fetchWaves = async () => {
          if (levelId) {
            const wavesCollection = query(collection(db, 'waves'), where('levelId', '==', levelId));
            const wavesSnapshot = await getDocs(wavesCollection);
            const wavesList = wavesSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setWaves(wavesList);
          } else {
            setWaves([]); // Clear waves if no level is selected
          }
        };
    
        fetchWaves();
      }, [levelId]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await addDoc(collection(db, 'sessions'), {
            title,
            link,
            sessionPdf,
            content,
            waveId,
          });
          alert('session added successfully!');
          // إعادة توجيه المستخدم بعد إضافة السيشن
        } catch (error) {
          console.error("Error adding session: ", error);
        }
      };

  return (

    <div className='' >
<div className="container py-20">
    <h2 className="text-center font-semibold mb-4">Add New Session</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label font-medium">Session Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="link" className="form-label font-medium">Session Vid Link</label>
        <input
          type="text"
          className="form-control"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="sessionPdf" className="form-label font-medium">Session PDF file</label>
        <input
          type="file"
          className="form-control"
          id="sessionPdf"
          value={sessionPdf}
          onChange={(e) => setsessionPdf(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label font-medium">Content</label>
        <textarea
          className="form-control"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="levelWave flex ">
        <div className="mb-3 me-5 w-50">
          <label htmlFor="levelId" className="form-label font-medium">Select Level</label>
          <select
            className="form-control"
            id="levelId"
            value={levelId}
            onChange={(e) => {
              setLevelId(e.target.value);
              setWaveId(''); // Reset selected wave when level changes
            }}
            required
          >
            <option value="" disabled>Select a Level</option>
            {levels.map(level => (
              <option key={level.id} value={level.id}>{level.title}</option>
            ))}
          </select>
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="waveId" className="form-label font-medium">Select Wave</label>
          <select
            className="form-control"
            id="waveId"
            value={waveId}
            onChange={(e) => setWaveId(e.target.value)}
            required
            disabled={waves.length === 0} // Disable if no waves available
          >
            <option value="" disabled>Select a Wave</option>
            {waves.map(wave => (
              <option key={wave.id} value={wave.id}>{wave.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="sessionPdf" className="form-label font-medium">sheet link</label>
        <input
          type="text"
          className="form-control"
          id="sessionPdf"
          value={sessionPdf}
          onChange={(e) => setsessionPdf(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sessionPdf" className="form-label font-medium">Upsolve sheet vid link</label>
        <input
          type="text"
          className="form-control"
          id="sessionPdf"
          value={sessionPdf}
          onChange={(e) => setsessionPdf(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sessionPdf" className="form-label font-medium">contest sheet link</label>
        <input
          type="text"
          className="form-control"
          id="sessionPdf"
          value={sessionPdf}
          onChange={(e) => setsessionPdf(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sessionPdf" className="form-label font-medium">Upsolve Contest Vid link</label>
        <input
          type="text"
          className="form-control"
          id="sessionPdf"
          value={sessionPdf}
          onChange={(e) => setsessionPdf(e.target.value)}
          required
        />
      </div>

      <div className="mt-3">
        <h5 className="form-label mb-2 font-thin">Attendance </h5>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer"/>
          <div class="group peer ring-0  bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-600  rounded-full outline-none duration-1000 after:duration-300 w-24 h-10  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39]   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none after:h-8 after:w-8 after:top-1 after:left-1   peer-checked:after:translate-x-12 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900">

          </div>
        </label>
      </div>
      
      <div className='flex align-middle justify-center mt-4'>
        <button type="submit" className=" bg-[#305593] rounded-lg hover:bg-[#40559b] text-center py-3 px-12 text-light font-bold">Add Session</button>
      </div>
    </form>
  </div>
    </div>
    
  )
}

export default AddSessions