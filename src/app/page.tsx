"use client"

import Link from "next/link";
import React, { useState } from "react";

export default function Home() {

  const [warna, setWarna] = useState("#FF5588");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [resultText, setResultText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(true);

  const [percentage, setPercentage] = useState(0);

  const randomNumber = Math.round(Math.random() * 100);

  const startAnimation = () => {
    setPercentage(0);
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev < randomNumber) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50);
  };


  const explanation = [
    {
      color: "#330000",
      text: "Gak ada chemistry sama sekali. Mungkin kalian beda banget dari segala aspek. Susah buat connect dan bikin hubungan yang asik"
    },
    {
      color: "#551111",
      text: "Nihil, bro! Ada beberapa kesamaan kecil, tapi lebih banyak bedanya. Hubungan ini bakal penuh drama dan butuh effort gede"
    },
    {
      color: "#772222",
      text: "Rendah banget nih. Ada beberapa kesamaan, tapi gak cukup buat nyambung. Bakal sering banget miskom dan butuh sabar ekstra"
    },
    {
      color: "#993333",
      text: "Cuma sedikit aja cocoknya. Ada beberapa hal yang sama, tapi lebih banyak yang beda. Bakal butuh kerja keras buat bikin hubungan ini lancar"
    },
    {
      color: "#BB4444",
      text: "Lumayan sih. Ada balance antara kesamaan dan perbedaan. Hubungan ini bisa berjalan, tapi mesti sering-sering kompromi"
    },
    {
      color: "#DD5555",
      text: "Cukup oke. Banyak kesamaan buat bikin fondasi hubungan yang solid, tapi masih ada beberapa beda yang perlu diatasi. Bisa jadi hubungan yang baik dengan komunikasi yang bagus"
    },
    {
      color: "#FF6666",
      text: "Mantap nih! Banyak kesamaan dan potensi buat hubungan yang solid. Perbedaan yang ada bisa diatasi dengan ngobrol bareng. Hubungan ini bisa berkembang dengan baik"
    },
    {
      color: "#FF7788",
      text: "Super cocok! Banyak kesamaan kuat, dan perbedaan yang ada gampang diatasi. Hubungan ini punya dasar yang bagus buat berkembang jadi lebih dalam dan asik"
    },
    {
      color: "#FF8899",
      text: "Gokil! Kalian punya banyak banget kesamaan. Perbedaan cuma sedikit dan gak berarti. Hubungan ini punya potensi kuat buat jadi happy dan memuaskan"
    },
    {
      color: "#FF99AA",
      text: "Perfect match! Kalian cocok banget di banyak hal. Hubungan ini sangat harmonis dengan sedikit banget perbedaan. Potensi buat kebahagiaan dan kedekatan emosional sangat tinggi"
    },
    {
      color: "#FF5588",
      text: "Soulmate vibes! Hampir semuanya nyambung banget. Baik dari nilai, minat, dan tujuan hidup, kalian sejalan. Hubungan ini kuat banget dan punya potensi buat jadi langgeng dan mendalam"
    },
  ]

  const setExplanation = (number: number) => {
    if (0) {
      setResultText(explanation[0].text);
      setWarna(explanation[0].color);
    } else if (number >= 1 && number <= 10) {
      setResultText(explanation[1].text);
      setWarna(explanation[1].color);
    } else if (number >= 11 && number <= 20) {
      setResultText(explanation[2].text);
      setWarna(explanation[2].color);
    } else if (number >= 21 && number <= 30) {
      setResultText(explanation[3].text);
      setWarna(explanation[3].color);
    } else if (number >= 31 && number <= 40) {
      setResultText(explanation[4].text);
      setWarna(explanation[4].color);
    } else if (number >= 41 && number <= 50) {
      setResultText(explanation[5].text);
      setWarna(explanation[5].color);
    } else if (number >= 51 && number <= 60) {
      setResultText(explanation[6].text);
      setWarna(explanation[6].color);
    } else if (number >= 61 && number <= 70) {
      setResultText(explanation[7].text);
      setWarna(explanation[7].color);
    } else if (number >= 71 && number <= 80) {
      setResultText(explanation[8].text);
      setWarna(explanation[8].color);
    } else if (number >= 81 && number <= 90) {
      setResultText(explanation[9].text);
      setWarna(explanation[9].color);
    } else if (number >= 91 && number <= 100) {
      setResultText(explanation[10].text);
      setWarna(explanation[10].color);
    }
  }
  

  const checkKhodam = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setFlag2(false);
    setTimeout(() => {
      setIsLoading(false);
      setIsResult(true);
      startAnimation();
      setName1(e.target.nama.value);
      setName2(e.target.pasangan.value);
      setTimeout(() => {
        setExplanation(randomNumber);
        setFlag(true);
        setFlag2(true);
      }, randomNumber * 50)
    }, 5000);
  }

  const resetKhodam = (e: any) => {
    e.preventDefault();
    setIsResult(false);
    setFlag(false);
    setFlag2(true);
    setName1("");
    setName2("");
    setResultText("");
    setWarna("#FFFFFF");
  }

  return (
    <main className="h-screen w-full m-0 overflow-hidden">
      <div className="w-auto h-full custom-bg m-0 overflow-hidden">
        <div className="w-auto h-screen flex justify-center items-center relative z-10 m-0 overflow-hidden">
          <div className="text-white font-thin text-[12px] absolute bottom-0 left-[50%] translate-x-[-50%] translate-y=0 z-[1] my-1">Developed by <Link className="text-[#97D3FF] font-bold" href="https://twitter.com/maruu_snk" target="_blank">Maruu</Link></div>
          <div className="flex-col text-white bg-[#9394ab3f] p-10 backdrop-filter backdrop-blur-sm border border-gray-500 rounded-xl sm:w-screen md:w-screen lg:w-1/3 xl:w-1/3 2xl:w-1/3 mx-1">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl font-bold title">Cupid Meter</h2>
              {!isLoading && !isResult && <form onSubmit={(e) => checkKhodam(e)} className="flex flex-col justify-center items-center">
                <div className="mt-5 flex flex-col justify-center items-center">
                  <div className="text-center text-sm font-light">Cek seberapa cocok kamu dengan crush atau pasangan kamu</div>
                  <input className="text-sm custom-input-text mt-4" name="nama" type="text" placeholder="Nama kamu" required />
                  <h2 className="text-4xl font-bold mt-2">+</h2>
                  <input className="text-sm custom-input-text mt-2" name="pasangan" type="text" placeholder="Nama pasangan kamu" required />
                </div>
                <button className="mt-8 bg-[#FF5588] px-8 py-2 rounded-[200px] hover:bg-[#b44b6a]" id="btn-check" type="submit" >CHECK</button>
              </form>}
              {isLoading && <div className="flex flex-col justify-center items-center mt-5">
                <div className="loading">
                  <div className="circle1"></div>
                  <div className="circle2"></div>
                </div>
                <div className="text-white mt-5 text-sm font-extralight text-center">Sedang menghitung kecocokan kamu dan pasangan kamu</div>
              </div>}
              {!isLoading && isResult && <div className="flex flex-col justify-center items-center">
                <div className="text-white text-center text-sm font-extralight mt-2">Persentase kecocokan <span className="font-bold text-[#ffd3e0]">{name1}</span> & <span className="font-bold text-[#ffd3e0]">{name2}</span></div>
                <div className="love-result-container mt-5 flex flex-row justify-center items-center">
                  <div className="love-meter-shape scale-90" style={{['--love-color' as any] : `${warna}`}}>
                    <div className="love-shape-back">
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                    </div>
                    <div className="love-shape">
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                    </div>
                  </div>
                  <div className="result-text text-5xl font-bold italic">{percentage}%</div>
                </div>
                <div className="text-[12px] text-white text-center">{resultText}</div>
                {flag && <button onClick={(e) => resetKhodam(e)} className="mt-5 text-[12px] bg-[#FF5588] text-white px-4 py-1 rounded-full hover:bg-[#b44b6a]">Ulangi</button>}
              </div>}
              {flag2 && <div className="flex flex-col mt-5">
                  <div className="text-[10px] text-white text-center">Permainan lainnya:</div>
                  <Link href="https://check-your-khodam.vercel.app/" target="_blank" className="text-[#ffd3e0] font-bold">Cek Khodam</Link>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
