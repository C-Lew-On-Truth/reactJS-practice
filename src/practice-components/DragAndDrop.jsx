import React from 'react';


class DragAndDrop extends React.Component {
    dragStart = (e, id) => {
        e.dataTransfer.setData("id", id)
    }

    dragOver = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div className='mainSection'>
                <h1>React Drag and Drop</h1>

                <div className="dragAndDropHolder">
                    <div className="dragAndDropItems item1">
                        <p 
                        className="dragBlocks"  
                        onDragStart={this.dragStart} 
                        onDragOver={this.dragOver}
                        draggable
                        >
                            <span className="text">Block One</span>
                        </p>
                    </div>
                    <div className="dragAndDropItems item2">

                    </div>

                    <div className="dragAndDropItems item1">

                        <p className="dragBlocks" draggable>
                            <span className="text">Block Two</span>
                        </p>

                    </div>
                    <div className="dragAndDropItems item2">

                    </div>

                    <div className="dragAndDropItems item1">

                        <p className="dragBlocks" draggable>
                            <span className="text">Block Three</span>
                        </p>

                    </div>
                    <div className="dragAndDropItems item2">

                    </div>

                    <div className="dragAndDropItems item1">
                        <p className="dragBlocks" draggable>
                            <span className="text">Block Four</span>
                        </p>
                    </div>
                    <div className="dragAndDropItems item2">

                    </div>

                    <div className="dragAndDropItems item1">
                        <p className="dragBlocks" draggable>
                            <span className="text">Block Five</span>
                        </p>
                    </div>
                    <div className="dragAndDropItems item2">

                    </div>
                </div>
            </div>
        )
    }
}

export default DragAndDrop