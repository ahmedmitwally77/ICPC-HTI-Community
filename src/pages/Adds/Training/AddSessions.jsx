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
    <div className="container py-20">
    <h2 className="text-center mb-4">Add New Session</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Session Title</label>
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
        <label htmlFor="link" className="form-label">Session Link</label>
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
        <label htmlFor="sessionPdf" className="form-label">Session PDF ID</label>
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
        <label htmlFor="content" className="form-label">Content</label>
        <textarea
          className="form-control"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="levelId" className="form-label">Select Level</label>
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
      <div className="mb-3">
        <label htmlFor="waveId" className="form-label">Select Wave</label>
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
      <button type="submit" className="btn btn-primary">Add Session</button>
    </form>
  </div>
  )
}

export default AddSessions