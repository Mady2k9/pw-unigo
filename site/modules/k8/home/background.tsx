import LeftBGIcon from "@assets/images/background/LeftBGIcon";
import StarBGIcon from "@assets/images/background/StarBGIcon";
import s from './background.module.css';

const HomeBackground = () => {
    return <div className={`${s.animatedBackground} fixed top-0 left-0 right-0 h-full lg:p-sidebar`}>
        <div className={'absolute top-[70%]'}>
            <LeftBGIcon/>
        </div>
        <div className={'absolute right-0 top-[30%] rotate-180'}>
            <LeftBGIcon/>
        </div>
        <div className={'absolute right-[30%] top-[20%]'}>
            <StarBGIcon/>
        </div>
        <div className={'absolute left-[40%] bottom-[25%]'}>
            <StarBGIcon/>
        </div>
    </div>
}
export default HomeBackground;
