pragma solidity ^0.4.2;

contract Election{
    
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
        string party;
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

        //What does an election have
            // Set of candidates
        
    }

    function addCandidate (Candidate candidate) private {
    candidatesCount ++;
    candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}