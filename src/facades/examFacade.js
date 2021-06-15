import utils from "../utils";
import { SERVER_URL } from "../settings";

function apiFacade() {
  //OBSERVE fetchAny takes a url and a callback. The callback handles the data from the response body.

  /**
   * REST API
   */
  function getPersons(callback) {
    // Change me to do something with data
    utils.fetchAny(SERVER_URL + "/persons", callback);
  }

  function getPersonsRest(callback) {
    utils.fetchAny(SERVER_URL + "/api/persons", callback);
  }

  function deletePersonRest(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/persons/" + id, callback, "DELETE");
  }

  function addPersonRest(person, callback) {
    utils.fetchAny(SERVER_URL + "/api/persons", callback, "POST", person);
  }

  function getPersonRest(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/persons/" + id, callback);
  }

  function editPersonRest(id, person, callback) {
    utils.fetchAny(SERVER_URL + "/api/persons/" + id, callback, "PUT", person);
  }

  function deleteDeveloperRest(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/exam" + id, callback, "DELETE");
  }

  /**
   * PROXY
   */
  function getMapsNoDTO(callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/map", callback);
  }

  function getMapsWithDTO(callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/mapdto", callback);
  }

  function getCountry(countryCode, callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/map/" + countryCode, callback);
  }

  function getPersonsProxy(callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/person", callback);
  }

  function deletePersonProxy(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/person/" + id, callback, "DELETE");
  }

  function addPersonProxy(person, callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/person", callback, "POST", person);
  }

  function getPersonProxy(id, callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/person/" + id, callback);
  }

  function editPersonProxy(id, person, callback) {
    utils.fetchAny(
      SERVER_URL + "/api/proxy/person/" + id,
      callback,
      "PUT",
      person
    );
  }

  function getJokesProxy(callback) {
    utils.fetchAny(SERVER_URL + "/api/proxy/jokes", callback);
  }

 

  return {
    deleteDeveloperRest,


    getPersons,
    getMapsNoDTO,
    getMapsWithDTO,
    getCountry,
    getPersonsProxy,
    deletePersonProxy,
    addPersonProxy,
    getPersonProxy,
    editPersonProxy,
    getPersonsRest,
    deletePersonRest,
    addPersonRest,
    getPersonRest,
    editPersonRest,
    getJokesProxy,
  };
}
const facade = apiFacade();
export default facade;
