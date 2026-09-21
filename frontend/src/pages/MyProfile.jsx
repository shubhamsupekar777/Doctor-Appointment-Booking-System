// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { assets } from '../assets/assets'

// const MyProfile = () => {

//     const [isEdit, setIsEdit] = useState(false)

//     const [image, setImage] = useState(false)

//     const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

//     // Function to update user profile data using API
//     const updateUserProfileData = async () => {

//         try {

//             const formData = new FormData();

//             formData.append('name', userData.name)
//             formData.append('phone', userData.phone)
//             formData.append('address', JSON.stringify(userData.address))
//             formData.append('gender', userData.gender)
//             formData.append('dob', userData.dob)

//             image && formData.append('image', image)

//             const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

//             if (data.success) {
//                 toast.success(data.message)
//                 await loadUserProfileData()
//                 setIsEdit(false)
//                 setImage(false)
//             } else {
//                 toast.error(data.message)
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }

//     }

//     return userData ? (
//         <div className='max-w-lg flex flex-col gap-2 text-sm pt-5'>

//             {isEdit
//                 ? <label htmlFor='image' >
//                     <div className='inline-block relative cursor-pointer'>
//                         <img className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
//                         <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
//                     </div>
//                     <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
//                 </label>
//                 : <img className='w-36 rounded' src={userData.image} alt="" />
//             }

//             {isEdit
//                 ? <input className='bg-gray-50 text-3xl font-medium max-w-60' type="text" onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} value={userData.name} />
//                 : <p className='font-medium text-3xl text-[#262626] mt-4'>{userData.name}</p>
//             }

//             <hr className='bg-[#ADADAD] h-[1px] border-none' />

//             <div>
//                 <p className='text-gray-600 underline mt-3'>CONTACT INFORMATION</p>
//                 <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]'>
//                     <p className='font-medium'>Email id:</p>
//                     <p className='text-blue-500'>{userData.email}</p>
//                     <p className='font-medium'>Phone:</p>

//                     {isEdit
//                         ? <input className='bg-gray-50 max-w-52' type="text" onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
//                         : <p className='text-blue-500'>{userData.phone}</p>
//                     }

//                     <p className='font-medium'>Address:</p>

//                     {isEdit
//                         ? <p>
//                             <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
//                             <br />
//                             <input className='bg-gray-50' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} /></p>
//                         : <p className='text-gray-500'>{userData.address.line1} <br /> {userData.address.line2}</p>
//                     }

//                 </div>
//             </div>
//             <div>
//                 <p className='text-[#797979] underline mt-3'>BASIC INFORMATION</p>
//                 <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600'>
//                     <p className='font-medium'>Gender:</p>

//                     {isEdit
//                         ? <select className='max-w-20 bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
//                             <option value="Not Selected">Not Selected</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>
//                         : <p className='text-gray-500'>{userData.gender}</p>
//                     }

//                     <p className='font-medium'>Birthday:</p>

//                     {isEdit
//                         ? <input className='max-w-28 bg-gray-50' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
//                         : <p className='text-gray-500'>{userData.dob}</p>
//                     }

//                 </div>
//             </div>
//             <div className='mt-10'>

//                 {isEdit
//                     ? <button onClick={updateUserProfileData} className='border cursor-pointer border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Save information</button>
//                     : <button onClick={() => setIsEdit(true)} className='border cursor-pointer border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Edit</button>
//                 }

//             </div>
//         </div>
//     ) : null
// }

// export default MyProfile



import React,{useContext,useState} from "react";
import {AppContext} from "../context/AppContext";
import axios from "axios";
import {toast} from "react-toastify";
import {assets} from "../assets/assets";

const MyProfile=()=>{
    const [isEdit,setIsEdit]=useState(false);
    const [image,setImage]=useState(false);
    const {token,backendUrl,userData,setUserData,loadUserProfileData}=useContext(AppContext);

    const updateUserProfileData=async()=>{
        try{
            const formData=new FormData();
            formData.append("name",userData.name);
            formData.append("phone",userData.phone);
            formData.append("address",JSON.stringify(userData.address));
            formData.append("gender",userData.gender);
            formData.append("dob",userData.dob);
            if(image)formData.append("image",image);

            const {data}=await axios.post(
                backendUrl+"/api/user/update-profile",
                formData,
                {headers:{token}}
            );

            if(data.success){
                toast.success(data.message);
                await loadUserProfileData();
                setIsEdit(false);
                setImage(false);
            }else toast.error(data.message);
        }catch(error){
            console.log(error);
            toast.error(error.message);
        }
    };

    const input="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white outline-none focus:border-[#5f6fff] focus:ring-1 focus:ring-[#5f6fff] transition";
    const label="text-xs font-medium text-gray-500 mb-1 block";

    return userData?(
        <div className="max-w-2xl mx-auto py-6">

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">

                <div className="flex items-center justify-between mb-7">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">My Profile</h2>
                        <p className="text-sm text-gray-500 mt-1">Manage your personal information</p>
                    </div>
                    {!isEdit&&(
                        <button
                            onClick={()=>setIsEdit(true)}
                            className="border border-[#5f6fff] text-[#5f6fff] px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#5f6fff] hover:text-white transition"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-5 mb-7">
                    <label htmlFor="image" className={isEdit?"cursor-pointer":""}>
                        <div className="relative">
                            <img
                                className="w-28 h-28 rounded-xl object-cover border border-gray-200"
                                src={image?URL.createObjectURL(image):userData.image}
                                alt=""
                            />
                            {isEdit&&(
                                <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center">
                                    <img className="w-7" src={assets.upload_icon} alt="" />
                                </div>
                            )}
                        </div>
                        {isEdit&&(
                            <input
                                onChange={e=>setImage(e.target.files[0])}
                                type="file"
                                id="image"
                                accept="image/*"
                                hidden
                            />
                        )}
                    </label>

                    <div>
                        <p className="text-lg font-semibold text-gray-800">{userData.name}</p>
                        <p className="text-sm text-gray-500 mt-1">{userData.email}</p>
                        {isEdit&&<p className="text-xs text-gray-400 mt-2">Click image to change</p>}
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">Contact Information</h3>

                    <div className="grid sm:grid-cols-2 gap-5">

                        <div>
                            <label className={label}>Full Name</label>
                            {isEdit?
                                <input
                                    className={input}
                                    value={userData.name}
                                    onChange={e=>setUserData(p=>({...p,name:e.target.value}))}
                                />:
                                <p className="text-sm text-gray-700 py-2">{userData.name}</p>
                            }
                        </div>

                        <div>
                            <label className={label}>Email</label>
                            <p className="text-sm text-blue-500 py-2">{userData.email}</p>
                        </div>

                        <div>
                            <label className={label}>Phone</label>
                            {isEdit?
                                <input
                                    className={input}
                                    value={userData.phone}
                                    onChange={e=>setUserData(p=>({...p,phone:e.target.value}))}
                                />:
                                <p className="text-sm text-blue-500 py-2">{userData.phone}</p>
                            }
                        </div>

                        <div>
                            <label className={label}>Address Line 1</label>
                            {isEdit?
                                <input
                                    className={input}
                                    value={userData.address.line1}
                                    onChange={e=>setUserData(p=>({...p,address:{...p.address,line1:e.target.value}}))}
                                />:
                                <p className="text-sm text-gray-700 py-2">{userData.address.line1}</p>
                            }
                        </div>

                        <div>
                            <label className={label}>Address Line 2</label>
                            {isEdit?
                                <input
                                    className={input}
                                    value={userData.address.line2}
                                    onChange={e=>setUserData(p=>({...p,address:{...p.address,line2:e.target.value}}))}
                                />:
                                <p className="text-sm text-gray-700 py-2">{userData.address.line2}</p>
                            }
                        </div>

                    </div>
                </div>

                <div className="border-t border-gray-100 mt-7 pt-6">
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">Basic Information</h3>

                    <div className="grid sm:grid-cols-2 gap-5">

                        <div>
                            <label className={label}>Gender</label>
                            {isEdit?
                                <select
                                    className={input}
                                    value={userData.gender}
                                    onChange={e=>setUserData(p=>({...p,gender:e.target.value}))}
                                >
                                    <option value="Not Selected">Not Selected</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>:
                                <p className="text-sm text-gray-700 py-2">{userData.gender}</p>
                            }
                        </div>

                        <div>
                            <label className={label}>Date of Birth</label>
                            {isEdit?
                                <input
                                    className={input}
                                    type="date"
                                    value={userData.dob}
                                    onChange={e=>setUserData(p=>({...p,dob:e.target.value}))}
                                />:
                                <p className="text-sm text-gray-700 py-2">{userData.dob}</p>
                            }
                        </div>

                    </div>
                </div>

                {isEdit&&(
                    <div className="flex justify-end gap-3 mt-8 pt-5 border-t border-gray-100">
                        <button
                            onClick={()=>{setIsEdit(false);setImage(false);loadUserProfileData()}}
                            className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={updateUserProfileData}
                            className="px-6 py-2.5 rounded-lg bg-[#5f6fff] text-white hover:bg-[#4f5ce8] transition font-medium"
                        >
                            Save Changes
                        </button>
                    </div>
                )}

            </div>
        </div>
    ):null;
};

export default MyProfile;