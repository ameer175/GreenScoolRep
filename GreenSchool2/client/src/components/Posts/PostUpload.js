
import React from 'react';
import  {Form } from 'semantic-ui-react';

const PostUpload = () => {



    return ( 
              <>
              
              
            <div className="main mainpost" style={{marginBottom:'20px', paddingBottom:'20px'}}>	

                    <p className="quotes">
                        <textarea name="description"style={{textAlign:'right' , fontFamily: 'Calibri'}} placeholder="שתף רעיון, תמונה"></textarea>
                    </p>
                    <div className="text-center p-3">
        
                    
                    </div>

                    <Form className="postbar" >
                        <input  id="chooseimg"  name='image' type='file' />
                        <button type="button" className="imgbttn" id="imgbttn">&#x1f4f7; תמונה</button>
                        <button type="submit"  id="postmypost" className="postmypost" >פרסם</button>
                    </Form>

                   

            </div>
          
        </>
     );
}


export default PostUpload;