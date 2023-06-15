import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

import { Avatar, Card } from 'antd';

import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

import Meta from 'antd/es/card/Meta';
import { ArrowLeftOutlined, StarFilled } from '@ant-design/icons';


export const Listing = [
  {
    cover: `${image1}`, desc: 'ساخت سوله و خرپا', href: 'ایران-سوله',
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel", 
    userName: 'ایران سوله' , rate: "4.2", review: "(123 بازدید)"
  },
  {
    cover: `${image2}`, desc: ' سقف شیروانی ویلا', href: 'سقف-سازان' ,
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=1", 
    userName: 'سقف سازان' , rate: "4.4", review: "(145 بازدید)"
  },
  {
    cover: `${image3}`, desc: 'آلاچیق و سایه بان', href: 'تبریز-آلاچیق' ,
    avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=3", 
    userName: 'تبریز آلاچیق' , rate: "4.8", review: "(234 بازدید)"
  },
  {
    cover: `${image4}`, desc: 'سردر و پیشانی' , href: 'سردر-پیشانی-تهران' ,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", 
    userName: 'سردر و پیشانی تهران' , rate: "3.9", review: "(89 بازدید)"
  },
]

function Cards(props: any) {
  return (
    <>
      <div className="cards">

        <h1> برترین های هفته</h1>

        <button
          type="button"
          className="p-1 focus:outline-none btn-sign-in float-left"
        >
          مشاهده همه  <ArrowLeftOutlined />
        </button>
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center padding-top-0">

          {Listing.map((item) => (
            // //////
            <div className="flex flex-col-reverse padding-botton-25 ">
              <Link to={item.href}>
                <Card
                  className='cards-hover '
                  cover={
                    <img height="200px"
                      src={item.cover}
                      alt={item.desc}
                    />
                  }
                >
                  <Meta
                    className='text-right'
                    avatar={<Avatar src={item.avatar} />}
                    title={item.userName}
                    description={item.desc}

                  />
                  <div className='text-right padding-top-10'>
                    <span className=' color-orange' ><StarFilled className='vertical-align'/> </span>
                    <b>{item.rate}</b>
                    <span className='opacity-text' > {item.review} </span>
                  </div>




                </Card>
              </Link>
            </div>


            //////////








            // <div key={item.name} className="flex flex-col-reverse padding-botton-25">
            //   <dt className="text-base leading-7  hover:text-white ">

            //   </dt>
            //   <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
            //     <div className='circle-job '>
            //     </div>
            //   </dd>
            // </div>
          ))}
        </dl>
      </div>















    </>
  )
}
export default Cards;
