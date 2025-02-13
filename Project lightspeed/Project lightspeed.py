# Creating the global variable distance which will hold a number. The number will represent kms. It will be the distance parameter in the function journey_time .
distance = 150000000

#Creating the global variable ls_km_seconds. It will hold an integer, the approximate number of kilometers light travels in one second: 299,792,458 km/s
ls_km_second = 299792458

# Creating the dictionary planet_sol_distance which will hold keys referring to planets of the solar system and values referring to that planet's distance from the sun in km based on its semi-major axis
planet_sol_distance = {	
"Mercury": 57910000,
"Venus": 108210000,
"Earth": 149598023,
"Mars": 227939366,
"Jupiter": 778479000,
"Saturn": 1433530000,
"Uranus": 2870972000,
"Neptune": 4500000000,
}

# Creating the dictionary dwarf_sol_distance which will hold keys referring to dwarf planets of the solar system and values referring to that planet's distance from the sun in km based on its semi-major axis
dwarf_sol_distance = {
"Ceres": 414000000,
"Orcus": 5860346986,
"Pluto": 5906380000,
"Haumea": 6450061792,
"Quaoar": 6536529362,
"Makemake": 6796231265,
"Gonggong": 10095612304,
"Eris": 10152309897,
"Sedna": 75696522570,
}

# Creating the dictionary star_sol_distance which will hold the keys referring to stars and values referring to their distance from the sun.
star_sol_distance = {
    "Alpha Centauri":
    "Sagitarius A*":

}

# Creating the list c_fractions to hold decimals between 0 and 1. These will be used to alter the variable ls_km_second to various fractions of the speed of light.
c_fractions = [0.01, 0.1, 0.25, 0.5, 0.75, 0.9]

# Defining the function journey_time . It (currently) takes two parameters, distance and fract_c the faction of the speed of light with a default value of 1
def journey_time(distance, fract_c = 1):
    # Returning the result of dividing the value held in the global variable distance by the value held in the global variable ls_km_second
    return distance / ls_km_second

#Printing the result of calling the function journey_time()
print(journey_time(distance))