import React, {  useEffect, useState } from 'react'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage} from '../../../firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore';

const AddWave = () => {

    const [levelId, setLevelId] = useState('');
    const [waveTitle, setWaveTitle] = useState('');
    const [waveDescription, setWaveDescription] = useState('');
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        const fetchLevels = async () => {
            const levelsCollection = collection(db, 'levels');
            const levelsSnapshot = await getDocs(levelsCollection);
            const levelsList = levelsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setLevels(levelsList);
        };
        fetchLevels();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Add new wave to the "waves" collection in Firestore
            await addDoc(collection(db, 'waves'), {
                title: waveTitle,
                description: waveDescription,
                levelId: levelId, // ربط الـ wave بمعرف الـ level
            });
            alert('Wave added successfully!');
            setWaveTitle('');
            setWaveDescription('');
            setLevelId('');
        } catch (error) {
            console.error('Error adding wave: ', error);
            alert('Failed to add wave.');
        }
    };

  return (
    <div className="container py-20">
            <h2>Add New Wave</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="level">Select Level:</label>
                    <select
                        id="level"
                        value={levelId}
                        onChange={(e) => setLevelId(e.target.value)}
                        className="form-control"
                        required
                    >
                        <option value="">--Select Level--</option>
                        {levels.map((level) => (
                            <option key={level.id} value={level.id}>
                                {level.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="waveTitle">Wave Title:</label>
                    <input
                        type="text"
                        id="waveTitle"
                        value={waveTitle}
                        onChange={(e) => setWaveTitle(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="waveDescription">Wave Description:</label>
                    <textarea
                        id="waveDescription"
                        value={waveDescription}
                        onChange={(e) => setWaveDescription(e.target.value)}
                        className="form-control"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Add Wave
                </button>
            </form>
        </div>
  )
}

export default AddWave