import React from 'react';
import styles from './SuperTestComponent.module.css'
import {Error404} from '../../common/Error/Error404';
import SuperButton from '../../common/SuperButton/SuperButton';
import SuperCheckbox from '../../common/SuperCheckbox/SuperCheckbox';
import SuperInputText from '../../common/SuperInputText/SuperInputText';
import SuperRadio from '../../common/SuperRadio/SuperRadio';
import SuperSelect from '../../common/SuperSelect/SuperSelect';

export const SuperTestComponent = () => {
    return (
        <>
        <div className={styles.superTestComponent}>
            SuperButton
            <SuperButton xType={'secondary'}/>
            SuperCheckbox
            <SuperCheckbox/>
            SuperInputText
            <SuperInputText />
            SuperRadio
            <SuperRadio/>
            SuperSelect
            <SuperSelect options={[{id:1,value:1},{id:2,value:2},{id:3,value:3}]}/>
        </div>
            Error404
            <Error404/>
</> );
};

