/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2019
* @license Apache-2.0
*/
import Adler32Checksum from "../../operations/Adler32Checksum";
import AnalyseHash from "../../operations/AnalyseHash";
import Bcrypt from "../../operations/Bcrypt";
import BcryptCompare from "../../operations/BcryptCompare";
import BcryptParse from "../../operations/BcryptParse";
import CRC16Checksum from "../../operations/CRC16Checksum";
import CRC32Checksum from "../../operations/CRC32Checksum";
import CTPH from "../../operations/CTPH";
import CompareCTPHHashes from "../../operations/CompareCTPHHashes";
import CompareSSDEEPHashes from "../../operations/CompareSSDEEPHashes";
import Fletcher16Checksum from "../../operations/Fletcher16Checksum";
import Fletcher32Checksum from "../../operations/Fletcher32Checksum";
import Fletcher64Checksum from "../../operations/Fletcher64Checksum";
import Fletcher8Checksum from "../../operations/Fletcher8Checksum";
import FromGeohash from "../../operations/FromGeohash";
import GenerateAllHashes from "../../operations/GenerateAllHashes";
import HAS160 from "../../operations/HAS160";
import HMAC from "../../operations/HMAC";
import Keccak from "../../operations/Keccak";
import MD2 from "../../operations/MD2";
import MD4 from "../../operations/MD4";
import MD5 from "../../operations/MD5";
import MD6 from "../../operations/MD6";
import RIPEMD from "../../operations/RIPEMD";
import SHA0 from "../../operations/SHA0";
import SHA1 from "../../operations/SHA1";
import SHA2 from "../../operations/SHA2";
import SHA3 from "../../operations/SHA3";
import SSDEEP from "../../operations/SSDEEP";
import Scrypt from "../../operations/Scrypt";
import Shake from "../../operations/Shake";
import Snefru from "../../operations/Snefru";
import TCPIPChecksum from "../../operations/TCPIPChecksum";
import ToGeohash from "../../operations/ToGeohash";
import Whirlpool from "../../operations/Whirlpool";

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Hashing = {
    "Adler-32 Checksum": Adler32Checksum,
    "Analyse hash": AnalyseHash,
    "Bcrypt": Bcrypt,
    "Bcrypt compare": BcryptCompare,
    "Bcrypt parse": BcryptParse,
    "CRC-16 Checksum": CRC16Checksum,
    "CRC-32 Checksum": CRC32Checksum,
    "CTPH": CTPH,
    "Compare CTPH hashes": CompareCTPHHashes,
    "Compare SSDEEP hashes": CompareSSDEEPHashes,
    "Fletcher-16 Checksum": Fletcher16Checksum,
    "Fletcher-32 Checksum": Fletcher32Checksum,
    "Fletcher-64 Checksum": Fletcher64Checksum,
    "Fletcher-8 Checksum": Fletcher8Checksum,
    "From Geohash": FromGeohash,
    "Generate all hashes": GenerateAllHashes,
    "HAS-160": HAS160,
    "HMAC": HMAC,
    "Keccak": Keccak,
    "MD2": MD2,
    "MD4": MD4,
    "MD5": MD5,
    "MD6": MD6,
    "RIPEMD": RIPEMD,
    "SHA0": SHA0,
    "SHA1": SHA1,
    "SHA2": SHA2,
    "SHA3": SHA3,
    "SSDEEP": SSDEEP,
    "Scrypt": Scrypt,
    "Shake": Shake,
    "Snefru": Snefru,
    "TCP/IP Checksum": TCPIPChecksum,
    "To Geohash": ToGeohash,
    "Whirlpool": Whirlpool,
};

export default OpModules;
