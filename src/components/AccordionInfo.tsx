"use client";

import { Disclosure } from "@/app/headlessui";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

const DEMO_DATA = [
  {
    name: "Description",
    content:
      "Metal meets glass, awesome Temui Galaxy A55 5G. Seri Galaxy A yang sederhana namun lebih baik hadir dalam desain ikonik yang menampilkan tata letak 3 kamera dalam desain bingkai datar logam untuk genggaman yang mudah dan intuitif. Ditambah lagi, ia dibuat dengan Corning Gorilla Glass Victus+ sehingga lebih tangguh dan lebih tahan terhadap kerusakan.",
  },
  {
    name: "Spesifikasi",
    content: `<div><span aria-hidden="true" id="headlessui-tabs-panel-:r2:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:r0:" tabindex="-1" style="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"></span><div id="headlessui-tabs-panel-:r3:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:r1:" tabindex="0" data-headlessui-state="selected"><div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Brand</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">Samsung</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Warna</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">Awesome Iceblue</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Jaringan</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">GSM / HSPA / LTE / 5G</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Prosesor</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">Exynos 1480 (4nm), Octa-Core</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">RAM</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">8 GB</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Kapasitas</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">256 GB</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Ukuran Layar</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">6.6 inch</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Tipe Layar</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">Super AMOLED, 120Hz, 1000 nits</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Resolusi Layar</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">1080 x 2340 pixels (FHD+)</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Kamera Belakang</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left"><p><strong>Triple<br></strong>50 MP, f/1.8, (wide)<br>12 MP, f/2.2, (ultrawide)<br>5 MP, f/2.4, (macro)<strong><br></strong></p></div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Kamera Depan</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">32MP, F2.2 (wide)</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">WLAN</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">802.11a/b/g/n/ac/ax 2.4GHz+5GHz, HE80, MIMO, 1024-QAM</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Bluetooth</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">Bluetooth v5.1</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">GPS</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">GPS, Glonass, Beidou, Galileo, QZSS</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Sensor</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">Accelerometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, Light Sensor, Virtual Proximity Sensing</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Baterai</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">5000 mAh</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Pengisian Daya</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">25W Fast Charging</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">SIM</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">Hybrid Dual Nano SIM</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Berat</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">213 gr</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Dimensi</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">161.1 x 77.4 x 8.2 mm</div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">Lainnya</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left"><p><strong>Others<br></strong>- NFC: Yes<br>- On-screen Fingerprint, eSIM, Samsung Knox Vault<br>- Side Metal Material</p></div></div><div class="flex py-1"><div class="mr-10 w-[200px] flex-none overflow-auto">SKU</div><div class="ml-auto overflow-auto text-right lg:ml-0 lg:text-left">8100142673</div></div></div></div></div>`,
  },

  {
    name: "How it Fits",
    content:
      "Use this as a guide. Preference is a huge factor — if you're near the top of a size range and/or prefer more coverage, you may want to size up.",
  },
  {
    name: "FAQ",
    content: `
    <ul class="list-disc list-inside leading-7">
    <li>All full-priced, unworn items, with tags attached and in their original packaging are eligible for return or exchange within 30 days of placing your order.</li>
    <li>
    Please note, packs must be returned in full. We do not accept partial returns of packs.
    </li>
    <li>
    Want to know our full returns policies? Here you go.
    </li>
    <li>
    Want more info about shipping, materials or care instructions? Here!
    </li>
  </ul>
    `,
  },
];

interface Props {
  panelClassName?: string;
  data?: typeof DEMO_DATA;
}

const AccordionInfo: FC<Props> = ({
  panelClassName = "p-4 pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6",
  data = DEMO_DATA,
}) => {
  return (
    <div className="w-full rounded-2xl space-y-2.5">
      {/* ============ */}
      {data.map((item, index) => {
        return (
          <Disclosure key={index} defaultOpen={index < 2}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
                  <span>{item.name}</span>
                  {!open ? (
                    <PlusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  ) : (
                    <MinusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={panelClassName}
                  as="div"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}

      {/* ============ */}
    </div>
  );
};

export default AccordionInfo;
