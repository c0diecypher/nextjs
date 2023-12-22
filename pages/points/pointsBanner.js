
import Link from 'next/link';
import { useState } from 'react';

const PointsBanner = () => {
    const userId = '123465';
    const [userBonus, setUserBonus] = useState(0);
    return (
        <>
         <div className='action-buttons'>
        <div className='action-card'>
          <Link href={`/points/${userId}`}>
            <div className='action-card-QWE13S'>
                <div className='action-card-QWE13B'></div>
                <div className='action-card-bg'>
                    <div className="action-inner">
                        <div className="action-head">
                            <div className="action-title">Бонусов</div>
                        </div>
                        <div className="action-footer">
                            <div className="action-poinst-title">₽</div>
                            <div className="action-poinst-icon">{userBonus}</div>
                        </div>
                    </div>
                </div>
            </div>
           </Link> 
        </div>
        <div className="action-card-IQWEA2">
          <div className='action-card-QWE13A'>
            <div className='action-card-bg'>
              <div className="action-inner">
                <div className="action-head" >
                  <div className="action-title-friend">Зови друзей</div>
                </div>
                <div className="action-footer">
                  <div className="action-poinst-icon-friend">подарим тебе и <br/>другу <span>500₽</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default PointsBanner;