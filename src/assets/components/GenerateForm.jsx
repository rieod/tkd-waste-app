import Input from "./Input";

export default function GenerateForm(){
    return(
        <div className='flex-generateform'>
            <h1>Generate QR Code</h1>
            <form>
                <Input 
                    label="Store Name"
                    id="storename"
                    type="text"
                    name="storename"
                    placeholder="Input store name"
                />

                <Input 
                    label="Store Location"
                    id="storelocation"
                    type="text"
                    name="storelocation"
                    placeholder="Input store location"
                />

                {/* <div className="control no-margin">
                    <label htmlFor="storename">Store Name</label>
                    <input id="storename" type="text" name="storename" placeholder="Input store name"/>
                </div>

                <div className="control no-margin">
                    <label htmlFor="storelocation">Store Location</label>
                    <input id="storelocation" type="text" name="storelocation" placeholder="Input store location" />
                </div> */}
            </form>
            <p className="form-actions">
                <button className="input-generateform">Input Store Detail</button>
            </p>
        </div>
    );
}