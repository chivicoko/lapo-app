'use client';

import FeesList from './FeesList';
import InputOne from '@/components/inputs/InputOne';
import InputTwo from '@/components/inputs/InputTwo';
import InputSelect from '@/components/inputs/InputSelect';
import ButtonOne from '@/components/button/ButtonOne';
import { useRouter } from 'next/navigation';

const selectArrary = ['Head Office', 'Second', 'Third', 'Fourth'];
const selectArrary2 = ['00000000', 'Second', 'Third', 'Fourth'];
const selectArrary3 = ['Verve', 'Second', 'Third', 'Fourth'];

const CardProfileForm = () => {
    const router = useRouter();
    const createProfile = () => router.back();

  return (
    <div className="py-2 space-y-5">
        <div className="py-3 px-4 bg-white border border-customGray rounded-radius-8">
            <h4 className='pb-4'>Profile Details</h4>
            <div className="w-full flex items-center gap-2">
                <form className="w-full space-y-4">
                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32">
                        <div className="w-1/2">
                            <InputOne onChange={(e) => e.target.value} value={''} label='Card Name*' name="cardName" placeholderText='Enter card name' />
                        </div>
                        <div className="w-1/2">
                            <InputOne onChange={(e) => e.target.value} value={''} label='Bin Prefix*' name="binPrefix" placeholderText='00000000' />
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32">
                        <div className="w-1/2">
                            <InputSelect label='Card Scheme*' valueArray={selectArrary3} name='cardScheme' />
                        </div>
                        <div className="w-1/2">
                            <InputTwo type='number' onChange={(e) => e.target.value} value={0} icon='chevron-selector-vertical.svg' label='Expiration*' name="expiration" placeholderText="0" />
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32">
                        <div className="w-1/2">
                            <InputOne onChange={(e) => e.target.value} value={''} label='Description' name="description" />
                        </div>
                        <div className="w-1/2">
                            <InputSelect label='Currency*' valueArray={selectArrary2} name='currency' />
                        </div>
                    </div>

                    <div className="w-full flex items-center gap-2 sm:gap-16 md:gap-32 pb-2">
                        <div className="w-1/2">
                            <InputSelect label='Branch Blacklist*' valueArray={selectArrary} name='branchBlacklist' />
                        </div>
                        <div className="w-1/2"></div>
                    </div>
                </form>
            </div>
        </div>

        <FeesList />

        <ButtonOne onClick={createProfile} classes='py-2 px-16' btnText1='Create Profile' />
    </div>
  )
}

export default CardProfileForm;