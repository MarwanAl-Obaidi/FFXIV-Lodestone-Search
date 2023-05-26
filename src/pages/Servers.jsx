import React, { useState, useEffect } from 'react';
import '../App.css';

function Servers() {
  const [isReady, setReady] = useState(false);
  const [Datacenter, setDatacenter] = useState('');

  useEffect(() => {
    fetch('https://xivapi.com/servers/dc')
    .then(response => response.json())
    .then(data => {
      setDatacenter(data);
      setReady(true);
    })
    .catch(err => console.log(err))
  }, [])

  if (!isReady)
    return <div className='loading'>Loading servers...</div>

  return (
    <div className="Servers">
      <h1>Data Centers</h1>
      <div className='jp'>
        <h2>Japanese Data Center</h2>
        <h2>Elemental</h2>
        <h4>{Datacenter.Elemental[0]}</h4>
        <h4>{Datacenter.Elemental[1]}</h4>
        <h4>{Datacenter.Elemental[2]}</h4>
        <h4>{Datacenter.Elemental[3]}</h4>
        <h4>{Datacenter.Elemental[4]}</h4>
        <h4>{Datacenter.Elemental[5]}</h4>
        <h4>{Datacenter.Elemental[6]}</h4>
        <h4>{Datacenter.Elemental[7]}</h4>
        <h2>Gaia</h2>
        <h4>{Datacenter.Gaia[0]}</h4>
        <h4>{Datacenter.Gaia[1]}</h4>
        <h4>{Datacenter.Gaia[2]}</h4>
        <h4>{Datacenter.Gaia[3]}</h4>
        <h4>{Datacenter.Gaia[4]}</h4>
        <h4>{Datacenter.Gaia[5]}</h4>
        <h4>{Datacenter.Gaia[6]}</h4>
        <h4>{Datacenter.Gaia[7]}</h4>
        <h2>Mana</h2>
        <h4>{Datacenter.Mana[0]}</h4>
        <h4>{Datacenter.Mana[1]}</h4>
        <h4>{Datacenter.Mana[2]}</h4>
        <h4>{Datacenter.Mana[3]}</h4>
        <h4>{Datacenter.Mana[4]}</h4>
        <h4>{Datacenter.Mana[5]}</h4>
        <h4>{Datacenter.Mana[6]}</h4>
        <h4>{Datacenter.Mana[7]}</h4>
        <h2>Meteor</h2>
        <h4>{Datacenter.Meteor[0]}</h4>
        <h4>{Datacenter.Meteor[1]}</h4>
        <h4>{Datacenter.Meteor[2]}</h4>
        <h4>{Datacenter.Meteor[3]}</h4>
        <h4>{Datacenter.Meteor[4]}</h4>
        <h4>{Datacenter.Meteor[5]}</h4>
        <h4>{Datacenter.Meteor[6]}</h4>
        <h4>{Datacenter.Meteor[7]}</h4>
      </div>
      <div className='na'>
        <h2>North American Data Center</h2>
        <h2>Aether</h2>
        <h4>{Datacenter.Aether[0]}</h4>
        <h4>{Datacenter.Aether[1]}</h4>
        <h4>{Datacenter.Aether[2]}</h4>
        <h4>{Datacenter.Aether[3]}</h4>
        <h4>{Datacenter.Aether[4]}</h4>
        <h4>{Datacenter.Aether[5]}</h4>
        <h4>{Datacenter.Aether[6]}</h4>
        <h4>{Datacenter.Aether[7]}</h4>
        <h2>Primal</h2>
        <h4>{Datacenter.Primal[0]}</h4>
        <h4>{Datacenter.Primal[1]}</h4>
        <h4>{Datacenter.Primal[2]}</h4>
        <h4>{Datacenter.Primal[3]}</h4>
        <h4>{Datacenter.Primal[4]}</h4>
        <h4>{Datacenter.Primal[5]}</h4>
        <h4>{Datacenter.Primal[6]}</h4>
        <h4>{Datacenter.Primal[7]}</h4>
        <h2>Crystal</h2>
        <h4>{Datacenter.Crystal[0]}</h4>
        <h4>{Datacenter.Crystal[1]}</h4>
        <h4>{Datacenter.Crystal[2]}</h4>
        <h4>{Datacenter.Crystal[3]}</h4>
        <h4>{Datacenter.Crystal[4]}</h4>
        <h4>{Datacenter.Crystal[5]}</h4>
        <h4>{Datacenter.Crystal[6]}</h4>
        <h4>{Datacenter.Crystal[7]}</h4>
        <h2>Dynamis</h2>
        <h4>{Datacenter.Dynamis[0]}</h4>
        <h4>{Datacenter.Dynamis[1]}</h4>
        <h4>{Datacenter.Dynamis[2]}</h4>
        <h4>{Datacenter.Dynamis[3]}</h4>
      </div>
      <div className='eu'>
        <h2>European Data Center</h2>
        <h2>Chaos</h2>
        <h4>{Datacenter.Chaos[0]}</h4>
        <h4>{Datacenter.Chaos[1]}</h4>
        <h4>{Datacenter.Chaos[2]}</h4>
        <h4>{Datacenter.Chaos[3]}</h4>
        <h4>{Datacenter.Chaos[4]}</h4>
        <h4>{Datacenter.Chaos[5]}</h4>
        <h4>{Datacenter.Chaos[6]}</h4>
        <h4>{Datacenter.Chaos[7]}</h4>
        <h2>Light</h2>
        <h4>{Datacenter.Light[0]}</h4>
        <h4>{Datacenter.Light[1]}</h4>
        <h4>{Datacenter.Light[2]}</h4>
        <h4>{Datacenter.Light[3]}</h4>
        <h4>{Datacenter.Light[4]}</h4>
        <h4>{Datacenter.Light[5]}</h4>
        <h4>{Datacenter.Light[6]}</h4>
        <h4>{Datacenter.Light[7]}</h4>
      </div>
      <div className='oce'>
        <h2>Oceanian Data Center</h2>
        <h2>Materia</h2>
        <h4>{Datacenter.Materia[0]}</h4>
        <h4>{Datacenter.Materia[1]}</h4>
        <h4>{Datacenter.Materia[2]}</h4>
        <h4>{Datacenter.Materia[3]}</h4>
        <h4>{Datacenter.Materia[4]}</h4>
      </div>
      <div className='kor'>
        <h2>Korean Data Center</h2>
        <h2>Korea</h2>
        <h4>{Datacenter.Korea[0]}</h4>
        <h4>{Datacenter.Korea[1]}</h4>
        <h4>{Datacenter.Korea[2]}</h4>
        <h4>{Datacenter.Korea[3]}</h4>
        <h4>{Datacenter.Korea[4]}</h4>
      </div>
      <div className='cn'>
        <h2>Chinese Data Center</h2>
        <h2>猫小胖</h2>
        <h4>{Datacenter.猫小胖[0]}</h4>
        <h4>{Datacenter.猫小胖[1]}</h4>
        <h4>{Datacenter.猫小胖[2]}</h4>
        <h4>{Datacenter.猫小胖[3]}</h4>
        <h4>{Datacenter.猫小胖[4]}</h4>
        <h4>{Datacenter.猫小胖[5]}</h4>
        <h4>{Datacenter.猫小胖[6]}</h4>
        <h2>莫古力</h2>
        <h4>{Datacenter.莫古力[0]}</h4>
        <h4>{Datacenter.莫古力[1]}</h4>
        <h4>{Datacenter.莫古力[2]}</h4>
        <h4>{Datacenter.莫古力[3]}</h4>
        <h4>{Datacenter.莫古力[4]}</h4>
        <h4>{Datacenter.莫古力[5]}</h4>
        <h4>{Datacenter.莫古力[6]}</h4>
        <h4>{Datacenter.莫古力[7]}</h4>
        <h2>豆豆柴</h2>
        <h4>{Datacenter.豆豆柴[0]}</h4>
        <h4>{Datacenter.豆豆柴[1]}</h4>
        <h4>{Datacenter.豆豆柴[2]}</h4>
        <h4>{Datacenter.豆豆柴[3]}</h4>
        <h4>{Datacenter.豆豆柴[4]}</h4>
        <h2>陆行鸟</h2>
        <h4>{Datacenter.陆行鸟[0]}</h4>
        <h4>{Datacenter.陆行鸟[1]}</h4>
        <h4>{Datacenter.陆行鸟[2]}</h4>
        <h4>{Datacenter.陆行鸟[3]}</h4>
        <h4>{Datacenter.陆行鸟[4]}</h4>
        <h4>{Datacenter.陆行鸟[5]}</h4>
        <h4>{Datacenter.陆行鸟[6]}</h4>
        <h4>{Datacenter.陆行鸟[7]}</h4>
      </div>
    </div>
  );
}

export default Servers;