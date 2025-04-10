// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { vapi } from '@/lib/vapi.sdk'; // your local vapi instance

// interface AgentProps {
//   userEmail: string;
// }

// const Agent = ({ userEmail }: AgentProps) => {
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [formData, setFormData] = useState({
//     role: '',
//     level: '',
//     techstack: '',
//     type: '',
//     amount: 0,
//   });

//   useEffect(() => {
//     const onMessage = (msg: any) => {
//       console.log('🎤 Transcript received:', msg?.transcript);

//       axios.post(`https://preppify-backend.onrender.com/generate-and-save`, {
//         ...formData,
//         email: userEmail,
//         message: msg?.transcript || '',
//       })
//       .then((res) => {
//         console.log('✅ Backend response:', res.data);
//       })
//       .catch((err) => {
//         console.error('❌ Error sending to backend:', err);
//       });
//     };

//     const onSpeechStart = () => setIsSpeaking(true);
//     const onSpeechEnd = () => setIsSpeaking(false);
//     const onError = (err: Error) => console.error('💥 Vapi Error:', err);

//     vapi.on('message', onMessage);
//     vapi.on('speech-start', onSpeechStart);
//     vapi.on('speech-end', onSpeechEnd);
//     vapi.on('error', onError);

//     return () => {
//       vapi.off('message', onMessage);
//       vapi.off('speech-start', onSpeechStart);
//       vapi.off('speech-end', onSpeechEnd);
//       vapi.off('error', onError);
//     };
//   }, [formData, userEmail]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: name === 'amount' ? parseInt(value) : value,
//     }));
//   };

//   return (
//     <div className="p-4 space-y-4 max-w-md mx-auto">
//       <h2 className="text-xl font-semibold">Interview Input</h2>

//       <input name="role" placeholder="Role" onChange={handleChange} className="w-full p-2 border rounded" />
//       <input name="level" placeholder="Level" onChange={handleChange} className="w-full p-2 border rounded" />
//       <input name="techstack" placeholder="Tech Stack" onChange={handleChange} className="w-full p-2 border rounded" />
//       <input name="type" placeholder="Interview Type" onChange={handleChange} className="w-full p-2 border rounded" />
//       <input name="amount" type="number" placeholder="Amount" onChange={handleChange} className="w-full p-2 border rounded" />

//       <div className="mt-4 text-lg">
//         {isSpeaking ? '🎤 Speaking...' : '🤫 Waiting...'}
//       </div>
//     </div>
//   );
// };

// export default Agent;
