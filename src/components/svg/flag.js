import React from 'react'
import FlagGB from './flaggb';
import FlagSE from './flagse';

export default function Flag(props) {
    switch (props.locale) {
        case "en":
            return (
                <FlagGB />
            )
        case "se":
            return (
                <FlagSE />
            )
    }
}
