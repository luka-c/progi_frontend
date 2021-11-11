import React from 'react';
import Card from "./Card";

function Register(props){
    return (
        <Card>
          <div className="Register">
            <form>
              <div className="FormRow">
                <label>Ime
                    <input name='firstname'/>
                </label>
                <label>Prezime
                    <input name='lastname'/>
                </label>
                <label>E-mail
                    <input name='email'/>
                </label>
                <label>Kontakt
                    <input name='number'/>
                </label>
                <label>Korisničko ime
                    <input name='username'/>
                </label>
                <label>Lozinka
                    <input name='password'/>
                </label>
                <label>Ponovite Lozinku
                    <input name='password2'/>
                </label>
                <label>Adresa
                    <input name='asdress'/>
                </label>
              </div>
            </form>
          </div>
        </Card>
      )
}

export default Register;