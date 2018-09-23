pragma solidity ^0.4.2;

contract Election{
    
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    struct Vote{
        uint id;
        string name;
        string metamaskAddress;
        string email;
    }
    
    //Fetch Candidate
    mapping(uint => Candidate) public candidates;
    
    // Store candidate count 
    uint public candidatesCount;

    //constructor
    constructor () public {
    // TODO: Add implementation
    }

    function addCandidate (string _name) private {
    candidatesCount ++;
    candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}