import React, { useEffect, useState } from 'react';
import '../Modal/modal.css';

export default function Modal({ onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userData, setUserData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mengirim data ke backend
    try {
      const response = await fetch("/alat/sewaalat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama_calon_client: name,
          no_telp: phone,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUserData((prevData) => [...prevData, data]); // Menambahkan data baru ke userData
      setName('');
      setPhone('');
      onClose(); // Menutup modal setelah submit
    } catch (err) {
      console.error("Error submitting data:", err);
    }
  };

  const getSewaAlat = () => {
    fetch("/api/sewaalat")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setUserData(data))
      .catch((err) => console.error("Error fetching data:", err));
  };

  useEffect(() => {
    getSewaAlat();
  }, []);

  return (
    <div className='modal'>
      <div className='overlay' onClick={onClose}></div>
      <div className='modal-content'>
        <h2>Isi Biodata Anda</h2>

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Nama:</label>
            {userData.map((data) => (
              <div key={data.id}>
                <h1>Nama: {data.nama_calon_client}</h1>
                <h1>No. WhatsApp: {data.no_whatsapp}</h1>
              </div>
            ))}
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>No. WhatsApp:</label>
            <input
              type='tel'
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className='modal-buttons'>
            <button type='button' className='close-modal' onClick={onClose}>Batalkan</button>
            <button type='submit' className='btn-sewa'>Sewa</button>
          </div>
        </form>
      </div>
    </div>
  );
}
