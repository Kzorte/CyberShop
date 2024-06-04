import Label from '@/components/Label/Label';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Input from '@/shared/Input/Input';
import SocialsList from '@/shared/SocialsList/SocialsList';
import Textarea from '@/shared/Textarea/Textarea';

import { title } from 'process'
import React from 'react'

const info = [
    {
        title: "📱 Chat Now",
        desc: "Need help right now? Come on, contact us via WhatsApp below",
        whatsappLink: "https://api.whatsapp.com/send?phone=6285330851234&text=Hello%20there!"
    },
    {
        title: "✉ Email",
        desc: "cybershop.care@gmail.com",
    },
    {
        title: "📞 Phone",
        desc: "0853-3085-1234",
    }
];

const PageCyberCare = () => {
  return (
    <div className={`nc-PageContact overflow-hidden`}>
        <div className="">
            <h2 className='my-20 flex items-center text-4xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 justify-center'>CyberShop Care</h2>
            <div className="container max-w-7xl mx-auto">
                <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="max-w-sm space-y-8">
                        {info.map((item, index) => (
                            <div key={index}>
                                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                                    {item.title}
                                </h3>
                                <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                                    {item.desc}
                                </span>
                                {item.whatsappLink && (
                                    <a href={item.whatsappLink} target='_blank' rel='noopener noreferrer'><ButtonSecondary>Chat Via WhatsApp</ButtonSecondary></a>
                                )}
                            </div>
                        ))}
                        <div className="">
                            <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                                SOCIAL
                            </h3>
                            <SocialsList className="mt-2" />
                        </div>
                    </div>
                    <div>
                        <form action="#" method="post" className="grid grid-cols-1 gap-6">
                            <label htmlFor="" className="block">
                                <Label>Full Name</Label>

                                <Input placeholder='Firman Aulia Wahid' type='text' className='mt-1'>
                                    
                                </Input>
                            </label>
                            <label htmlFor="" className="block">
                                <Label>Email Address</Label>

                                <Input placeholder='example@example.com' type='text' className='mt-1'>
                                    
                                </Input>
                            </label>
                            <label htmlFor="" className="block">
                                <Label>Message</Label>

                                <Textarea className='mt-1' rows={6} />
                            </label>
                            <div>
                                <ButtonPrimary type="submit">Send Message</ButtonPrimary>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
    </div>
  )
}

export default PageCyberCare