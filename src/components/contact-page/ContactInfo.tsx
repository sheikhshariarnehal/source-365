'use client';

import homeIcon from '@public/images/icons/home.svg';
import mailIcon from '@public/images/icons/mail-open.svg';
import phoneIcon from '@public/images/icons/phone-right.svg';
import gradientThree from '@public/images/ns-img-498.png';
import gradientTwo from '@public/images/ns-img-509.png';
import gradientOne from '@public/images/ns-img-510.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const contactInfoItems = [
  {
    id: 1,
    icon: homeIcon,
    title: 'Office Address',
    content: 'Ashulia School & College Market, Ashulia, Savar, Dhaka, Bangladesh',
    gradient: gradientOne,
    gradientClass: 'top-[-187px] left-[174px] -rotate-[78deg]',
  },
  {
    id: 2,
    icon: mailIcon,
    title: 'Email Us',
    content: 'contact@source365.org',
    link: 'mailto:contact@source365.org',
    gradient: gradientTwo,
    gradientClass: 'top-[-206px] left-[-36px] rotate-[62deg]',
  },
  {
    id: 3,
    icon: phoneIcon,
    title: 'Call Us Direct',
    content: '01931-623820 / 01408-185323',
    link: 'tel:01931623820',
    gradient: gradientThree,
    gradientClass: 'top-[-184px] left-[-185px]',
  },
];

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    number: '',
    email: '',
    service: 'Growth Program',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Source 365,\n\nName: ${formData.fullname}\nPhone: ${formData.number}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`,
    );
    window.open(`https://wa.me/8801931623820?text=${text}`, '_blank');
  };

  return (
    <section
      className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-[100px]"
      aria-label="Contact Information and Form">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* heading */}
          <div className="mx-auto max-w-[720px] space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <div>
                <span className="badge badge-cyan mb-2">Get in Touch</span>
                <h1 className="text-heading-2 font-medium text-secondary dark:text-accent">
                  Let&apos;s Build Something Extraordinary Together
                </h1>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 text-base leading-relaxed">
                Have a project in mind, interested in our Growth Program, or want to discuss a business opportunity? Contact our team today for a tailored consultation.
              </p>
            </RevealAnimation>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-[70px]">
            {/* contact info cards */}
            <div className="flex flex-col gap-6 w-full lg:max-w-[360px]">
              {contactInfoItems.map((item) => (
                <RevealAnimation key={item.id} delay={0.4}>
                  <div className="bg-secondary dark:bg-background-6 relative w-full space-y-4 overflow-hidden rounded-[20px] p-8 text-center shadow-lg">
                    {/* bg overlay */}
                    <figure
                      className={`pointer-events-none absolute size-[350px] overflow-hidden select-none opacity-40 ${item.gradientClass}`}>
                      <Image src={item.gradient} alt="Decorative gradient" className="size-full object-cover" />
                    </figure>
                    <figure className="mx-auto size-10 overflow-hidden">
                      <Image src={item.icon} alt={`${item.title} icon`} className="size-full object-cover" />
                    </figure>
                    <div className="space-y-2">
                      <p className="text-heading-6 text-accent font-semibold">{item.title}</p>
                      {item.link ? (
                        <p className="text-accent/80 text-sm">
                          <Link href={item.link} className="hover:underline">{item.content}</Link>
                        </p>
                      ) : (
                        <p className="text-accent/80 text-sm">{item.content}</p>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}

              {/* Instant WhatsApp Card */}
              <div className="rounded-[20px] bg-[#25D366]/15 border border-[#25D366]/30 p-6 text-center space-y-3">
                <p className="text-sm font-semibold text-secondary dark:text-accent">Need Immediate Assistance?</p>
                <p className="text-xs text-secondary/70 dark:text-accent/70">Connect directly with our senior consultant on WhatsApp.</p>
                <a
                  href="https://wa.me/8801931623820?text=Hello%20Source%20365%2C%20I%20would%20like%20to%20consult%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-2.5 text-xs font-semibold shadow-md hover:bg-[#20ba5a] transition-colors w-full">
                  <span>Open WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* contact form */}
            <RevealAnimation
              delay={0.3}
              className="dark:bg-background-6 mx-auto w-full max-w-[847px] rounded-4xl bg-white p-6 md:p-8 lg:p-11 shadow-xl border border-stroke-2 dark:border-stroke-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* name and phone number */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  {/* name */}
                  <div className="w-full space-y-2">
                    <label
                      htmlFor="fullname"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="e.g. John Doe"
                      required
                      value={formData.fullname}
                      onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                      className="dark:border-stroke-7 dark:bg-background-7 border-stroke-3 bg-background-1 text-sm text-secondary dark:text-accent h-[48px] w-full rounded-xl border px-4 focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  {/* number */}
                  <div className="w-full space-y-2">
                    <label
                      htmlFor="number"
                      className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      placeholder="e.g. 01931-623820"
                      required
                      value={formData.number}
                      onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                      className="dark:border-stroke-7 dark:bg-background-7 border-stroke-3 bg-background-1 text-sm text-secondary dark:text-accent h-[48px] w-full rounded-xl border px-4 focus:outline-none focus:border-primary-500"
                    />
                  </div>
                </div>

                {/* email and service */}
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="w-full space-y-2">
                    <label htmlFor="email" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. contact@yourbusiness.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="dark:border-stroke-7 dark:bg-background-7 border-stroke-3 bg-background-1 text-sm text-secondary dark:text-accent h-[48px] w-full rounded-xl border px-4 focus:outline-none focus:border-primary-500"
                    />
                  </div>

                  <div className="w-full space-y-2">
                    <label htmlFor="service" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="dark:border-stroke-7 dark:bg-background-7 border-stroke-3 bg-background-1 text-sm text-secondary dark:text-accent h-[48px] w-full rounded-xl border px-4 focus:outline-none focus:border-primary-500">
                      <option value="Growth Program">End-to-End Growth Program</option>
                      <option value="Facebook Boosting">Facebook Post Boosting Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">Mobile App Development</option>
                      <option value="SEO">SEO Optimization</option>
                      <option value="SQA">Software Quality Assurance (SQA)</option>
                      <option value="Server-Side Tracking">Server-Side Tracking Setup</option>
                      <option value="Graphics Design">Creative Graphics Design</option>
                      <option value="Business Partnership">Business Partnership / Dollar Exchange</option>
                    </select>
                  </div>
                </div>

                {/* message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                    Project Details / Inquiries
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your brand, current challenges, and goals..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="dark:border-stroke-7 dark:bg-background-7 border-stroke-3 bg-background-1 text-sm text-secondary dark:text-accent w-full rounded-xl border p-4 focus:outline-none focus:border-primary-500"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-lg w-full text-center shadow-lg">
                  Submit Consultation Request
                </button>
              </form>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactInfo.displayName = 'ContactInfo';
export default ContactInfo;
