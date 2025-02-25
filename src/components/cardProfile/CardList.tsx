import { cardProfileTableHead } from '@/utils/data';
import Image from 'next/image';
import ButtonNeutral from '../button/ButtonNeutral';
import { recentCardInfoProps } from '@/utils/types';
import ButtonLinkNeutral from '../button/ButtonLinkNeutral';

const CardList = ({deleteCard, newCardProfiles}: {deleteCard: (id: number) => void; newCardProfiles: recentCardInfoProps[]}) => {

  return (
    <div className={`pt-1`}>
        <div className="flex items-center justify-between gap-6 pt-4 pb-4">
          <div className="w-full overflow-x-scroll custom-scrollbar">
            <table className="min-w-full custom-scrollbar">
              <thead className="bg-transparent border border-customGray">
                <tr className="bg-neutral-100 divide-x divide-customGray">
                  {cardProfileTableHead.map(item => (
                    <th key={item.id} className={`py-[10px] px-2 text-[13px] text-center text-textGray capitalize whitespace-nowrap tracking-wider`}>{item.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-customGray border border-customGray">
                {newCardProfiles.map(item => (
                  <tr
                    key={item.id}
                    className="my-2 divide-x divide-customGray"
                  >
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.cardName}</td>
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.currency}</td>
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.expiration}</td>
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.binPrefix}</td>
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.dateCreated}</td>
                    <td className={`relative py-[5px] px-2 text-[10px] text-center whitespace-nowrap w-2 space-x-4`}>
                      <span className='flex items-center justify-center gap-4 h-full'>
                        <ButtonNeutral onClick={() => deleteCard(item.id)} title='Delete Card' icon1={<div className="relative size-[20px]"><Image src="/icons/trash-01.svg" fill alt='trash icon' className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>} />
                        <ButtonLinkNeutral href={`/card-profile/${item.id}`} title='Edit Card' icon1={<div className="relative size-[20px]"><Image src="/icons/edit-01.svg" fill alt='edit icon' className={`object-contain`} sizes="(max-width: 768px) 100vw, 50vw" /></div>} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default CardList;