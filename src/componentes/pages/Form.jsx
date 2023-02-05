import React from 'react';


    function Form(props) {
        // onKeypress
      
      
        function handleSubmit(evt){
          evt.preventDefault();
          console.log("enviamos form",evt)
        }

        function handleKeyPress (evt){
        let key = evt.key.toLowerCase();
          const blockChars ="aeiou";

          if (blockChars.includes (key )){
           evt.preventDefault();
        }


      }

        return (
          <form onSubmit={handleSubmit} className="container">
            <div className="form-group">
              <label className="text-muted mb-1" for="ejemplo">
                <small>Ingresá solo consonantes</small>
              </label>
              <input
                onKeyDown={handleKeyPress}
                type="ejemplo"
                className="form-control"
                id="ejemplo"
                aria-describedby="ejemplo"
                placeholder="Ingresá el texto"
              />
            </div>
            <div class="mt-3 btn-group" role="group">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        );
      }
      

export default Form;