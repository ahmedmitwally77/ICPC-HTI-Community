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
          <h2 className='text-center mb-5'>Add Wave</h2>
          <form onSubmit={handleSubmit}>

          <div className="form-group my-3">
                    <label className='font-medium' htmlFor="waveTitle">Wave Name:</label>
                    <input
                        type="text"
                        id="waveTitle"
                        value={waveTitle}
                        onChange={(e) => setWaveTitle(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group my-3">
                    <label className='font-medium' htmlFor="waveDescription">Wave Description:</label>
                    <textarea
                        id="waveDescription"
                        value={waveDescription}
                        onChange={(e) => setWaveDescription(e.target.value)}
                        className="form-control"
                        required
                    ></textarea>
                </div>


                <div className="form-group my-3 flex">
                    <div className="form-group my-3 w-50">
                        <label className='font-medium' htmlFor="Started">Started</label>
                        <input
                            type="date"
                            id="Started"
                            value={waveTitle}
                            onChange={(e) => setWaveTitle(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group my-3 ms-5 w-50">
                    <label className='font-medium' htmlFor="Ended">Ended</label>
                    <input
                        type="date"
                        id="Ended"
                        value={waveTitle}
                        onChange={(e) => setWaveTitle(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                </div>


                <div className="form-group my-3 flex">
                    <div className="form-group my-3 w-50">
                        <label className='font-medium' htmlFor="Instructor">Add Instructor</label>
                    <select
                        id="Instructor"
                        value={levelId}
                        onChange={(e) => setLevelId(e.target.value)}
                        className="form-control"
                        required
                    >
                        <option value="">--Select Instructor--</option>
                        {levels.map((level) => (
                            <option key={level.id} value={level.id}>
                                {level.title}
                            </option>
                        ))}
                    </select>
                    </div>
                    
                    <div className="form-group my-3 ms-5 w-50">
                    <label className='font-medium' htmlFor="mentor">Add Mentors</label>
                    <select
                        id="mentor"
                        value={levelId}
                        onChange={(e) => setLevelId(e.target.value)}
                        className="form-control"
                        required
                    >
                        <option value="">--Select Mentors--</option>
                        {levels.map((level) => (
                            <option key={level.id} value={level.id}>
                                {level.title}
                            </option>
                        ))}
                    </select>
                </div>
                </div>

                <div className="form-group my-3 flex">
                    <div className="form-group my-3 w-50">
                        <label className='font-medium' htmlFor="hr">Add HRs</label>
                    <select
                        id="hr"
                        value={levelId}
                        onChange={(e) => setLevelId(e.target.value)}
                        className="form-control"
                        required
                    >
                        <option value="">--Select HRs--</option>
                        {levels.map((level) => (
                            <option key={level.id} value={level.id}>
                                {level.title}
                            </option>
                        ))}
                    </select>
                    </div>

                    <div className="form-group my-3 ms-5 w-50">
                    <label className='font-medium' htmlFor="level">Select Level:</label>
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
                </div>


                <div className="mt-3">
                    <h5 className="form-label mb-3 font-medium">Open For Registeration </h5>
                    <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer"/>
                    <div class="group peer ring-0  bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-600  rounded-full outline-none duration-1000 after:duration-300 w-24 h-10  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39]   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none after:h-8 after:w-8 after:top-1 after:left-1   peer-checked:after:translate-x-12 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900">

                    </div>
                    </label>
                </div>

                

                <div className='flex align-middle justify-center mt-4'>
        <button type="submit" className=" bg-[#305593] rounded-lg hover:bg-[#40559b] text-center py-3 px-12 text-light font-bold">Add Wave</button>
      </div>
            </form>
        </div>
  )
}

export default AddWave