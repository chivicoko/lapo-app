import { cardRequestTableHead } from '@/utils/data';
import ButtonLinkNeutral from '../button/ButtonLinkNeutral';
import { recentCardInfoProps } from '@/utils/types';

const CardRequestList = ({newCardRequests}: {newCardRequests: recentCardInfoProps[]}) => {
  return (
    <div className={`pt-1`}>
        <div className="flex items-center justify-between gap-6 pt-4 pb-4">
          <div className="w-full overflow-x-scroll custom-scrollbar">
            <table className="min-w-full custom-scrollbar">
              <thead className="bg-transparent border border-customGray">
                <tr className="bg-neutral-100 divide-x divide-customGray">
                  {cardRequestTableHead.map(item => (
                    <th key={item.id} className={`py-[10px] px-2 text-[12px] text-center whitespace-nowrap text-textGray capitalize tracking-wider`}>{item.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-customGray border border-customGray">
                {newCardRequests.map(item => (
                  <tr
                    key={item.id}
                    className="my-2 divide-x divide-customGray"
                  >
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.branch}</td>
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.initiator}</td>
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.quantity}</td>
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.batch}</td>
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>{item.dateRequested}</td>
                    <td className={`relative py-[11px] px-2 text-[12px] text-center whitespace-nowrap w-2`}>
                      <span className={`${item.status === 'Ready' ? 'text-green-700 border-green-300 bg-green-100' : item.status === 'In Progress' ? 'text-orange-700 border-orange-300 bg-orange-100' : item.status === 'Acknowledged' ? 'text-blue-700 border-blue-300 bg-blue-100' : 'text-gray-700 border-gray-300 bg-gray-100'} px-4 py-[4px] border rounded-full`}>
                        {item.status}
                      </span>
                    </td>
                    <td className={`relative py-[6px] px-1 text-[12px] text-center whitespace-nowrap w-2`}>
                      <ButtonLinkNeutral href={`/card-request/${item.id}`} btnText1='View' classes="text-primary font-semibold py-[5px] px-1" />
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

export default CardRequestList;