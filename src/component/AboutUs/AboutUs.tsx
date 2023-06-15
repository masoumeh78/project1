import React from 'react';
import './AboutUs.css';

const posts = [
    {
        id: 1,
        title: ' سقف پروژه چیکار میکنه؟ ',
        href: '#',
        description: ' سقف پروژه به عنوان یک سایت کسب درآمد از طریق ثبت پروژه برای کارفرماها فراهم کرده. با ثبت پروژه‌های سقف شیبدار و شیروانی، سوله و خرپا، آلاچیق و سردر و بسیاری مهارت های دیگه از طریق سقف پروژه امکان پذیره. اگر مایلید کارفرما بشید و از طریق اجرای پروژه کسب درآمد کنید یا با ثبت آگهی پروژه هاتون رو به کارفرما بسپرید، همین امروز به سقف پروژه بپیوندید. ',
    },
    // More posts...
    {
        id: 2,
        title: ' دسترسی سریع به نیروی کار ',
        href: '#',
        description: ' با سقف پروژه می تونی کارفرما رو خیلی آسون پیدا کنی و انتخاب و مصاحبه شون کنی، به همین راحتی کار را به کاردان بسپار. ',
    },
    // More posts...
    {
        id: 3,
        title: ' پرداخت نهایی پس از رضایت شما ',
        href: '#',
        description: ' سپردن اجرای پروژه به کارفرماهای حرفه ای مزایای زیادی برای کسب و کار شما داره.شما به جای مراجعه به چندین شرکت و مجموعه می تونید با ثبت پروژه توی سقف پروژه بیش از دهها پیشنهاد از متخصصین حرفه ای دریافت کنید و با استفاده از سیستم پرداخت امن با خیال راحت کار رو به کاردونش بسپرید. ',
    },

]

function AboutUs() {
    return (
        <>
            <div className="about-us ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto lg:mx-0 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            درباره سایت <span className='text-orange'>سقف پروژه</span>
                        </h2>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 
                      lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl items-start justify-between">
                                
                                <div className="group">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900
                                     hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 text-sm leading-6 text-gray-600 post-description">
                                        {post.description}
                                    </p>
                                </div>

                            </article>
                        ))}
                    </div>
                    <div className='text-center question'>
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 ">
                            سوالی دارید؟ با ما در ارتباط باشید.
                        </h3>
                        <button
                            type="button"
                            className="p-1 focus:outline-none btn-sign-in  "
                        >
                            تماس با ما
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUs
