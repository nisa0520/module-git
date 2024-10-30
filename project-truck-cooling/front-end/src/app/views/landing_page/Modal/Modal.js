// Modal.js
import React, { useState } from 'react';
import '../Modal/modal.css';

export default function Modal({ onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Phone:', phone);
    onClose();
  };

  return (
    <div className='modal'>
      <div className='overlay' onClick={onClose}></div> 
      <div className='modal-content'>
        <h2>Isi Biodata Anda</h2>
        
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Nama:</label>
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
