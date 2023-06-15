import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import './HeroSection.css';

function SearchBar() {
    return (
        <div className='hero-btns'>

            <input className='search-input' type="text" placeholder="   مثلا : سردر ، آلاچیق ، سوله و. . . "
                autoComplete='false' />

            <Button className='search-btn search-hover' shape="circle"  >
                <span className="search-icon icon-hover "> <SearchOutlined /></span>
            </Button>

        </div>
    )
}

export default SearchBar
