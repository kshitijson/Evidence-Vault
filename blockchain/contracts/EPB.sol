// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract EPB{

    address internal owner;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    struct Evidence{
        string id;
        uint case_no;
        string case_name;
        string file_name;
        string file_type;
        string file_hash_ipfs;
    }

    Evidence[] public evidences;

    function insertEvidence(string memory _id, uint _caseNo, string memory _caseName, string memory _fileName, string memory _fileType, string memory _fileHash) 
    public
    onlyOwner{
        evidences.push(Evidence(_id, _caseNo, _caseName, _fileName, _fileType, _fileHash));
    }

    function viewEvidence(uint _caseNo) 
    public 
    view 
    onlyOwner
    returns (EPB.Evidence[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < evidences.length; i++) {
            if (evidences[i].case_no == _caseNo) {
                count++;
            }
        }
        EPB.Evidence[] memory result = new EPB.Evidence[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < evidences.length; i++) {
            if (evidences[i].case_no == _caseNo) {
                result[index] = evidences[i];
                index++;
            }
        }
        return result;
    }
}