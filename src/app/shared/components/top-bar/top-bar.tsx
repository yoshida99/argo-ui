import * as React from 'react';

require('./top-bar.scss');

export const TopBar = () => (
    <div className='top-bar'>
        <div className='row'>
            <div className='columns small-9 top-bar__left-side'>
                <div className='top-bar__title text-truncate'>Page title</div>
            </div>
            <div className='columns small-3 top-bar__right-side'>
                <div className='top-bar__tools'/>
            </div>
        </div>
    </div>
);
