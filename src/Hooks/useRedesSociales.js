import {useEffect, useState} from 'react';

const UseRedesSociales = (filial) => {
  const [redesSociales, setRedesSociales] = useState({});

  useEffect(() => {
    if(filial === 'lima'){
      setRedesSociales({
        fbk : 'https://www.facebook.com/institutoalasperuanasiesapoficial/', 
        ist : 'https://www.instagram.com/institutoalasperuanas_iesap/',
        tik : 'https://www.tiktok.com/@institutoalasperuanas?_d=secCgYIASAHKAESPgo8vbbF%2BRoF52c0UiFPRfvj9CU78Wowo7'
      })
    }else if (filial === 'piura') {
      setRedesSociales({
        fbk : 'https://www.facebook.com/institutoalasperuanaspiura', 
        ist : '#',
        tik : '#'
      })
    }
    else if (filial === 'arequipa') {
      setRedesSociales({
        fbk : 'https://www.facebook.com/institutoalasperuanasarequipa?_rdc=1&_rdr', 
        ist : 'https://www.instagram.com/institutoalasperuanasaqp/',
        tik : 'https://www.tiktok.com/@institutoalasperuanas?_d=secCgYIASAHKAESPgo8vbbF%2BRoF52c0UiFPRfvj9CU78Wowo7'
      })
    }
    else if (filial === 'chiclayo') {
      setRedesSociales({
        fbk : 'https://www.facebook.com/InstitutoAlasPeruanasChiclayo/?_rdc=1&_rdr', 
        ist : 'https://www.instagram.com/institutoalasperuanaschiclayo/',
        tik : 'https://www.tiktok.com/@institutoalasperuanas?_d=secCgYIASAHKAESPgo8vbbF%2BRoF52c0UiFPRfvj9CU78Wowo7'
      })
    }
    else if (filial === 'ica') {
      setRedesSociales({
        fbk : 'https://www.facebook.com/institutoalasperuanasica', 
        ist : 'https://www.instagram.com/institutoalasperuanas_ica/',
        tik : 'https://www.tiktok.com/@institutoalasperuanas?_d=secCgYIASAHKAESPgo8vbbF%2BRoF52c0UiFPRfvj9CU78Wowo7'
      })
    }
  }, [filial])

  return [redesSociales];
}
 
export default UseRedesSociales;