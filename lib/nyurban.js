/**
 * @fileoverview Library for interacting with nyurban.com.
 * @author metzen@gmail.com (Matt McDonald)
 */


/**
 * The namespace for nyurban.com functionality.
 */
var nyurban = {};


/**
 * Map from court codes to full court name.
 * @type {Object.<string, string>}
 */
nyurban.COURTS = {
  'F': 'far',
  'N': 'near'
};


/**
 * Map from gym location codes to addresses.
 * @type {Object.<string, string>}
 */
nyurban.GYMS = {
  'AL': 'Asher Levy, First Avenue between 11th and 12th Street.',
  'AS': 'Anna Siler, 166 Essex Street.',
  'ASL': 'The American Sign Language and English Lower School, ' +
         '225 East 23rd St, New York, NY 10010',
  'BS': 'Baruch Simon, 20st St. between First and Second Avenues',
  'BRN': 'Louis D Brandeis High School, West 84th Street, New York, NY',
  'BLY': '343 E 87th St, New York, NY 10128',
  'CAT': 'Cathedral High School, East 56th Street, New York, NY',
  'CS': 'P.S. 199 Jesse Isador Straus, West 70th Street, New York, NY',
  'CHL': 'P.S. 33, Chelsea Prep, 9th Avenue, New York, NY',
  'CPE': 'Central Park East H.S., 1573 Madison Avenue at 106th Street.',
  'FHS': 'Fashion HS, 225 West 24th Street. Between 7th & 8th Avenues.',
  'FIT': 'Fashion Institute of Technology',
  'HSG': 'HS of Graphics, 49th Street between 9th and 10th Avenues.',
  'HTC': 'Hunter College, 695 Park Avenue, New York, NY 10065',
  'HHS': 'Hunter College High School, 71 East 94th Street, New York, NY 10128',
  'JJC': 'John Jay College of Criminal Justice, 10th Avenue, New York, NY',
  'LAG': 'LaGuardia High School, Amsterdam Avenue, New York, NY, United States',
  'OJH': 'J.H.S. M044 William J. O\'Shea, West 77th Street, New York, NY, United States',
  'PHS': 'Park West H.S., 525 West 50th St. Between 10th & 11th Avenues',
  'RS': 'Robert Simon, 5th Street & Avenue B.',
  'SPH': 'Seward Park H.S., 350 Grand Street',
  'TP': 'Tito Puente EC, 240 East 109th St, between 2nd and 3rd Avenues.',
  'TRN': 'Trinity School, 91st Street between Columbus & Amsterdam Avenues.',
  'WHS': 'West Side HS, 141 West 102nd Street at Amsterdam Avenue.',
  'Z-MV': 'Martha Valle, 145 Stanton Street. Corner or Norfolk.'
};


/**
 * Special "opponent" value used to indicate a by week in the UI.
 * @type {string}
 */
nyurban.NO_GAME_THIS_WEEK = '*** No Game This Week';
