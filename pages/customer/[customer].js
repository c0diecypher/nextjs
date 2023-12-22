import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
export default function () {
    const [tgPhoneNumber, setTgPhoneNumber] = useState(null);
    const [fullName, setFullName] = useState(''); 
    const [userPhone, setUserPhone] = useState('');
    const [address, setAddress] = useState('');
    const [userCity, setUserCity] = useState('');
    const url = `https://cdn.zipperconnect.space/customer/settings/client/photo/204688184`;
    const username = (null)
return (
    <>
        <div className="profile-header">
            <div className="profile-avatar-box">
                <div className="profile-avatar-transparent">
                    <div className="profile-avatar">
                    
                        <div className="profile-avatar">
                          <img src={url} className="usercard_avatar_img"/>
                        </div>
          
                    </div>
                    <div className="profile-name">Евгений</div>
                    <footer>{`@${username}` || 'Не указан'}</footer>
                </div>
            </div> 
        </div>
             <div className="profile-data">
              <div className='profile-data-title'>
                    Данные доставки
                </div>
                <div className="profile-data-info">
                  <span>ФИО</span>
                  <span className="profile-data-text">{fullName || 'Не указан'}</span>
                </div>
                <div className="profile-data-info">
                  <span>Телефон</span>
                  <span className="profile-data-text">{userPhone || 'Не указан'}</span>
                </div>
                <div className="profile-data-info">
                  <span>Город</span>
                  <span className="profile-data-text">{userCity || 'Не указан'}</span>
                </div>
                <div className="profile-data-info">
                  <span>Адрес доставки</span>
                  <span className="profile-data-text">{address || 'Не указан'}</span>
                </div>

                <button className="btn-profile-data-info btn-profile-data" >
                Редактировать</button>             
             </div>
              <div className="profile-data">
              <div className='profile-data-title'>
                    Помоги нам
                    <span style={{marginLeft: '5px'}}>✍🏻 </span>
                </div>
                <div className="profile-data-info">
                <span style={{marginLeft: '5px', textAlign:'left'}}>Напиши, что улучшить и получи бонус!

                  </span>
                </div>

                <button className="btn-profile-data-info btn-profile-data">
                Написать</button>             
             </div>
             
             </>
 )
};
