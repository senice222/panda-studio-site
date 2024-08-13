import { NavLink } from 'react-router-dom'
import { Arrow, LOGO, TurnOff } from '../Svgs/Svgs'
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <div className={style.firstBlock}>
                    <LOGO />
                    <p>PANDA<br/> STUDIO</p>
                </div>
                <div className={style.links}>
                    <NavLink to="/">Портфолио</NavLink>
                    <NavLink to="/">Услуги</NavLink>
                    <NavLink to="/">Отзывы</NavLink>
                </div>
                <div className={style.btnBlock}>
                    <button className={style.button}>Оставить заявку <Arrow /><p /></button>
                    <TurnOff />
                </div>
            </div>
        </div>
    )
}

export default Header