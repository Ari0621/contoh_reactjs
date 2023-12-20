import { Button } from 'flowbite-react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import type { CustomFlowbiteTheme } from 'flowbite-react';

const buttonCustom: CustomFlowbiteTheme['button'] = {
    base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
        "fullSized": "w-full",
    color: {
        default: "text-white focus:ring-0 focus:ring-transparent dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
        },
    size: {
        custom : "text-base px-0 py-0",
        }
};

export default function Valid() {

    const navigate = useNavigate()

    return (
    <section className="justify-center md:pl-10 w-full h-auto space-y-5 md:space-y-10 my-auto">
        <Button 
        theme={buttonCustom} 
        onClick={() => navigate('/')} 
        color='default' 
        size='custom' 
        className="bg-transaparent text-sm md:text-base font-normal text-typography-300 fill-typography-300 hover:font-medium hover:text-typography-100 hover:fill-typography-100">
            <MdKeyboardArrowLeft className="w-6 h-6" />
            <p className='mx-[10px]'>Back</p>
        </Button>
        <h1 className="text-typography-100 text-2xl font-bold text-center md:text-3xl md:text-start lg:text-5xl">Your Certificate Data</h1>

        {/* Table Certification */}
        <table className="table-auto  w-full">
            <tbody className='space-y-5'>

                {/* Certification Number */}
                <tr className='flex flex-col lg:flex-row  lg:gap-5'>
                    <td className='text-xs text-typography-300 text-center md:text-start md:text-base lg:text-typography-100 lg:w-40'>Certification Number</td>
                    <td className='hidden lg:inline-block text-base text-typography-100'>:</td>
                    <td className='text-base font-medium text-center md:text-start text-typography-100 lg:font-normal'>03/03/MG/EDU/ALSAV/2023</td>
                </tr>

                {/* Certification Name */}
                <tr className='flex flex-col lg:flex-row lg:gap-5'>
                    <td className='text-xs text-typography-300 text-center md:text-start lg:text-base lg:text-typography-100 lg:w-40'>Name</td>
                    <td className='hidden lg:block text-base text-typography-100'>:</td>
                    <td className='text-base font-medium text-center md:text-start text-typography-100 lg:font-normal'>DICKI TRI WAHYUDHA</td>
                </tr>

                {/* Program */}
                <tr className='flex flex-col lg:flex-row lg:gap-5'>
                    <td className='text-xs text-typography-300 text-center md:text-start lg:text-base lg:text-typography-100 lg:w-40'>Program</td>
                    <td className='hidden lg:inline-block text-base text-typography-100'>:</td>
                    <td className='text-base font-medium text-center md:text-start text-typography-100 lg:font-normal'>INTERNSHIP PROGRAM (MAGANG)</td>
                </tr>

                {/* Periode */}
                <tr className='flex flex-col lg:flex-row lg:gap-5'>
                    <td className='text-xs text-typography-300 text-center md:text-start lg:text-base lg:text-typography-100 lg:w-40'>Period</td>
                    <td className='hidden lg:block text-base text-typography-100'>:</td>
                    <td className='text-base font-medium text-center md:text-start text-typography-100 lg:font-normal'>03 OCTOBER 2023 to 16 MARCH 2024</td>
                </tr>

                {/* Status */}
                <tr className='flex flex-col lg:flex-row lg:gap-5'>
                    <td className='text-xs text-typography-300 text-center md:text-start lg:text-base lg:text-typography-100 md:w-40'>Status</td>
                    <td className='hidden lg:inline-block text-base text-typography-100'>:</td>
                    <td className='text-base font-medium text-center md:text-start text-primary-100 lg:font-bold'>Valid</td>
                </tr>
            </tbody>
        </table>
        <p className="text-typography-300 text-sm text-center md:text-base md:text-start">This certificate is issued by <span className='font-bold'>PT. ALSAV SYSTEM DEVELOPMENT</span> and internally validated</p>
    </section>
    )
}