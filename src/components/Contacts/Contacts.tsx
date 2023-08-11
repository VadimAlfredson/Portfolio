import React, {FC} from "react";
import s from './Contacts.module.css'

const Contacts: FC = () => {
    let contacts = [
        {name: "vk", site: 'www.sdsad.wewa'}, {name: "fc", site: 'www.sdsad.wewa'}, {name: "git", site: 'www.sdsad.wewa'}
    ]

    return <div className={s.contacts}>Contacts
        {contacts.map((i,index) => <div key={index}>{i.name}<a>{i.site}</a></div>)}
    </ div>
}

export default Contacts