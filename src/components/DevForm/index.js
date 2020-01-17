import React, { useState , useEffect } from 'react'

    function DevForm({ onSubmit }) {

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const [github_username, setGithubusername] = useState("");
    const [techs, setTechs] = useState("");


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {
                    latitude,
                    longitude
                } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err)
            }, {
                timeout: 30000
            }
        )
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();

       await onSubmit({
           github_username,
           techs,
           latitude,
           longitude
       });

       setGithubusername("");
       setTechs("");
    }

    return(
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              type="text"
              onChange={e => setGithubusername(e.target.value) }
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Técnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required 
              type="text"
              onChange={e => setTechs(e.target.value) }
              />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                name="latitude" 
                id="latitude" 
                required 
                type="text" 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                name="longitude" 
                id="longitude" 
                required 
                type="text" 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
    );
}

export default DevForm;