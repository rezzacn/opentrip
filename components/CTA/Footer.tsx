import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full">
      <div className="container mx-auto flex items-center justify-around relative px-4">
        <div className="flex flex-col items-start gap-y-4">
          <div className="flex flex-col gap-y-2">
            <Image src="/images/logo.png" alt="logo" width={200} height={50} priority />
          </div>
        </div>
        <div className="flex-1 h-[500px] justify-between items-center hidden sm:flex">
          <div className="mx-auto">
            <h2 className="font-bold text-xl">Company</h2>
            <div className="mt-5">
              <p>About</p>
              <p>Press</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[500px] justify-between items-center hidden sm:flex">
          <div className="mx-auto">
            <h2 className="font-bold text-xl">Support</h2>
            <div className="mt-5">
              <p>Help Center</p>
              <p>Terms of service</p>
              <p>List Items</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[500px] justify-between items-center hidden sm:flex">
          <div className="mx-auto">
            <h2 className="font-bold text-xl">Kerja Sama</h2>
            <div className="mt-5">
              <p>Daftar Jadi Hoster</p>
              <p>Hoster Terdaftar</p>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[500px]  items-center hidden sm:flex">
          <div className="mx-auto">
            <h2 className="font-bold text-xl">Get the App</h2>
            <div className="flex">
              <Image className="me-3" src="/google-play.svg" alt="Google Play Store" width={150} height={50} priority />
              <Image src="/store-apple.svg" alt="App Store" width={150} height={50} priority />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 text-white flex flex-col items-center sm:flex-row sm:justify-between px-10 bg-black">
        <p className="mb-3 sm:mb-0">© 2020 OPENTRIP. All rights reserved</p>
        <div className="flex mt-3 sm:mt-0">
          <FaInstagram className="mx-2" />
          <FaTwitter className="mx-2" />
          <FaYoutube className="mx-2" />
        </div>
      </div>
    </div>
  );
}
