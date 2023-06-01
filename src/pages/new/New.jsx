// ** React Imports
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import React , {useState, useEffect} from "react";
import "./new.scss";
import logo from "../../assets/images/logo-tab.png";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// ** MUI Imports
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

const New = () => {
  //token
  const [token, setToken] = useState("");
  // staff
  const [selectStaff, setSelectStaff] = useState([]);
  const [staff, setStaff] = useState([]);

  const [numeroVol, setNumeroVol]= useState(0);

  // airplanes
  const [selectAirplane,setSelectAirplane] = useState({});
  const [airplanes,setAirplanes] = useState("");

  //pilots
  const [selectPilot, setSelectPilot]= useState({});
  const [pilots, setPilots] = useState([]);

  //copilots
  const [selectCopilot, setSelectCopilot] = useState([]);
  const [copilots, setCopilots] = useState([]);

  // aerports
  const [to, setTo] = useState({});
  const [from, setFrom] = useState({});
  const [listAeroprts, setListAeroprts] = useState([]);

  // restaurants
  const [selectRestaurant, setSelectRestaurant] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  //status
  const [status, setStatus] = useState("");
  const [selectStatus, setSelectStatus] = useState("");

  //delay
  const [delay, setDelay] = useState(0);

  // departure
  const [selecteDepartTime, setSelecteDepartTime] = useState("");
  const [selecteArrivalTime, setSelectArrivalTime] = useState("");

  // flight type
  const [typeFlight, setTypeFlight] = useState("");

  // weight
  const [weight, setWeight] = useState(0);

  // type marchandise 
  const[typeMarchandise, setTypeMarchandise] = useState("");

  // nb passengers
  const [nbPassenger, setNbPassenger] = useState(0);

  // type trip
  const[typeTrip, setTypeTrip] = useState("");

  // equipage
  const [equipage, setEquipage] = useState({})

  // vol
  const [flight, setFlight] = useState({});
  // arrival 
  const inputStyle = {
    width: 750,
    backgroundColor: ""
  };

  useEffect(()=>{
    setToken(localStorage.getItem('token'));
    getRestaurants();
    getPilots();
    getCopilots();
    getAirplanes();
    getStaff();
    getAeroports();
  },[])

  // get restaurants
  const getRestaurants = async() =>{
    fetch('/api/restaurations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
    })
      .then(response => response.json())
      .then(data => {
        setRestaurants(data);
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
      });
  }

    // get aeroports
    const getAeroports = async() =>{
      fetch('/api/aeroports', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        Authorization: `Bearer ${token}`,
      })
        .then(response => response.json())
        .then(data => {
          setListAeroprts(data);
        })
        .catch(error => {
          console.error('Error fetching aeroports:', error);
        });
    }
  // get pilots
  const getPilots = async() =>{
    fetch('/api/pilotes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
    })
      .then(response => response.json())
      .then(data => {
        setPilots(data);
      })
      .catch(error => {
        console.error('Error fetching pilots:', error);
      });
  }

  // get copilots
  const getCopilots = async() =>{
    fetch('/api/copilotes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
    })
      .then(response => response.json())
      .then(data => {
        setCopilots(data);
      })
      .catch(error => {
        console.error('Error fetching copilots:', error);
      });
  }

  // get staff
  const getStaff = async() =>{
    fetch(' /api/staff', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
    })
      .then(response => response.json())
      .then(data => {
        setStaff(data);
      })
      .catch(error => {
        console.error('Error fetching staff:', error);
      });
  }

  // get airplanes
  const getAirplanes = async() =>{
    fetch('/api/avions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
    })
      .then(response => response.json())
      .then(data => {
        setAirplanes(data);
      })
      .catch(error => {
        console.error('Error fetching airplanes:', error);
      });
  }
  // const save equipage
  const saveEquipage = () => {
    const equipage ={
      copilot: selectCopilot,
      pilot: selectCopilot,
      staff: selectStaff
    }
    fetch('/api/equipages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
      body: JSON.stringify(equipage)
    })
    .then(response => response.json())
    .then(data => {
      setEquipage(data);
    })
    .catch(error => {
      console.error('Error fetching airplanes:', error);
    });
  }
  // save flight
  const saveFlight = () => {
    let flight = {
      dateDepart: selecteDepartTime,
      dateArrivee: selecteArrivalTime,
      retard: 0,
      etat: status,
      aeroportDepart: from,
      aeroportDestination: to,
      avion: selectAirplane,
      equipage: equipage,
      restaurations: selectRestaurant,
    };
    
    if (typeFlight === 'Marchandise') {
      flight.poids = weight;
      flight.typeMarchandise = typeMarchandise;
    } else {
      flight.nbPassenger = nbPassenger;
      flight.typeTrip = typeTrip;
    }
    
    fetch('/api/vol', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      Authorization: `Bearer ${token}`,
      body: JSON.stringify(flight)
    })
    .then(response => response.json())
    .then(data => {
      setFlight(data);
    })
    .catch(error => {
      console.error('Error fetching airplanes:', error);
    });
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div
          style={{
            position: "absolute",
            top: "500px",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Card style={inputStyle}>
            <CardHeader
              title="Add Flight"
              titleTypographyProps={{ variant: "h4" }}
            >
              <img src={logo} alt="Avatar" width={10} />
            </CardHeader>
            <Divider sx={{ margin: 0 }} />
            <form onSubmit={(e) => e.preventDefault()}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Flight 
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Flight code"
                      placeholder="XX123"
                      value={numeroVol}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>Select Airplane</InputLabel>
                      <Select
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                        value={selectAirplane}
                        onChange={(event) => setSelectAirplane(event.target.value)}
                      >
                      {airplanes.map((airplane) => (
                        <MenuItem key={airplane.idAvion} value={airplane.idAvion}>
                          {airplane.nomAvion}
                        </MenuItem>
                      ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Aeroport
                    </Typography>
                  </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Flying from</InputLabel>
                    <Select
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                      value={from}
                      onChange={(event) => setFrom(event.target.value)}
                    >
                      {listAeroprts.map((aeroport) => (
                        <MenuItem key={aeroport.idAeroport} value={aeroport.idAeroport}>
                          {aeroport.nom}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Flying To</InputLabel>
                    <Select
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                      value={to}
                      onChange={(event) => setTo(event.target.value)}
                    >
                      {listAeroprts.map((aeroport) => (
                        <MenuItem key={aeroport.idAeroport} value={aeroport.idAeroport}>
                          {aeroport.nom}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Schedule
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker 
                          value={selecteDepartTime}
                          onChange={setSelecteDepartTime}
                        label="Departure Date and Time" />
                      </DemoContainer>
                    </LocalizationProvider>                  
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DateTimePicker"]}>
                        <DateTimePicker 
                        value={selecteArrivalTime}
                        onChange={setSelectArrivalTime}
                        label="Arrival Date and Time" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Restaurant
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>Select a restaurant</InputLabel>
                      <Select
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                        value={selectRestaurant}
                        onChange={(event) => setSelectRestaurant(event.target.value)}
                        multiple
                      >
                        {restaurants.map((restaurant) => (
                          <MenuItem key={restaurant.idRestauration} value={restaurant.idRestauration}>
                            {restaurant.nom}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Delay
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="number"
                      label="Delay"
                      placeholder="Enter the delay"
                      value={delay}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>Select flight status</InputLabel>
                      <Select
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                      >
                        <MenuItem value="onTime">On time</MenuItem>
                        <MenuItem value="delayed">Delayed</MenuItem>
                        <MenuItem value="cancelled">Cancelled</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Team
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id='form-layouts-separator-select-label'>Select pilot</InputLabel>
                      <Select
                        id='form-layouts-separator-select'
                        labelId='form-layouts-separator-select-label'
                        value={selectPilot}
                        onChange={(event) => setSelectPilot(event.target.value)}
                      >
                        {pilots.map((pilot) => (
                          <MenuItem key={pilot.id} value={pilot.id}>
                            {pilot.nom} {pilot.prenom}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Select co-pilot</InputLabel>
                    <Select
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                      value={selectCopilot}
                      onChange={(event) => setSelectCopilot(event.target.value)}
                    >
                      {copilots.map((copilot) => (
                        <MenuItem key={copilot.id} value={copilot.id}>
                          {copilot.nom} {copilot.prenom}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Select personnel</InputLabel>
                    <Select
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                      value={selectStaff}
                      onChange={(event) => setSelectStaff(event.target.value)}
                      multiple
                    >
                      {staff.map((member) => (
                        <MenuItem key={member.idEmploye} value={member.idEmploye}>
                          {member.nom} {member.prenom}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Marchandise 
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id='form-layouts-separator-select-label'>Select type flight</InputLabel>
                    <Select
                      id='form-layouts-separator-select'
                      labelId='form-layouts-separator-select-label'
                      value={typeFlight}
                      onChange={(event) => setStatus(event.target.value)}
                    >
                      <MenuItem value="marchandise">Marchandise</MenuItem>
                      <MenuItem value="trip">Trip</MenuItem>
                    </Select>
                  </FormControl>
                  </Grid>
                  {typeFlight === 'trip' ? (
                    <>
                      <Grid item xs={12}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Trip
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Number of passengers"
                          placeholder="0"
                          value={nbPassenger}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Type trip"
                          placeholder="type flight"
                          value={typeTrip}
                        />
                      </Grid>
                    </>
                  ) : (
                    <>
                      <Grid item xs={12}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Marchandise
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          type="number"
                          label="Weight"
                          placeholder="0"
                          value={weight}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          type="text"
                          label="Type merchandise"
                          placeholder="Select type merchandise"
                          value={typeMarchandise}
                        />
                      </Grid>
                    </>
                  )}

                </Grid>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    size="large"
                    type="submit"
                    sx={{ mr: 3 }}
                    variant="contained"
                    style={{ backgroundColor: "rgba(235,31,40,255)" }}
                    onClick={saveFlight}
                  >
                  Add Flight
                  </Button>
                  <Button
                    size="large"
                    color="secondary"
                    variant="outlined"
                    style={{
                      color: "rgba(235,31,40,255)",
                      borderColor: "rgba(235,31,40,255)"
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default New;
