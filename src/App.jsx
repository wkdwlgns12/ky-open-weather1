
import './App.css'
import WeatherCard from './components/WeatherCard'
import { useState, useRef, useEffect } from 'react'
import { fetchCoordinates } from './api/geo'
import { fetchWeatherByCoords } from './api/weather'
function App() {

  const [city, setCity] = useState('seoul')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])


  const handleSearch = async () => {
    const q = city.trim()
    if (!q) return


    try {
      setLoading(true)
      setErr('')

      const { lat, lon, name, country } = await fetchCoordinates(q)
      // console.log(lat, lon, name, country)

      const data = await fetchWeatherByCoords(lat, lon)
      setWeather(data)
      setCity('')

    } catch (error) {
      console.log(error)

    } finally {

      setLoading(false)
    }

  }


  const onChangeInput = (e) => setCity(e.target.value)
  const onKeyup = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className='app'>
      <h1>장지훈의 날씨앱</h1>
      <div className="input-wrap">
        <input
          ref={inputRef}
          value={city}
          onChange={onChangeInput}
          onKeyUp={onKeyup}
          type="text"
          placeholder='도시이름을 입력하세요' />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? "검색중...." : "검색"}
        </button>
      </div>
      {err && <p className='error'>{err}</p>}
      {loading && <p className='info'>불러오는중...</p>}
      <WeatherCard weather={weather} />
    </div>
  )
}

export default App
