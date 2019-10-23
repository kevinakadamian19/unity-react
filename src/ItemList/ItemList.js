import React, {Component} from 'react';

class ItemList extends Component {

    render() {
        return(
            <div className='Item_List'>
                <button type="button">Remove</button>
                <button type="button">Add Guest</button>
            </div>
        )
    }
}

export default ItemList;