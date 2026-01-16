import type { Key } from './types';
import { C_MAJOR_KEY } from './keys/C_Major';
import { G_MAJOR_KEY } from './keys/G_Major';
import { D_MAJOR_KEY } from './keys/D_Major';
import { A_MAJOR_KEY } from './keys/A_Major';
import { E_MAJOR_KEY } from './keys/E_Major';
import { B_MAJOR_KEY } from './keys/B_Major';
import { F_SHARP_MAJOR_KEY } from './keys/F_Sharp_Major';
import { Db_MAJOR_KEY } from './keys/Db_Major';
import { Ab_MAJOR_KEY } from './keys/Ab_Major';
import { Eb_MAJOR_KEY } from './keys/Eb_Major';
import { Bb_MAJOR_KEY } from './keys/Bb_Major';
import { F_MAJOR_KEY } from './keys/F_Major';
import { A_MINOR_KEY } from './keys/A_Minor';
import { E_MINOR_KEY } from './keys/E_Minor';
import { B_MINOR_KEY } from './keys/B_Minor';
import { F_SHARP_MINOR_KEY } from './keys/F_Sharp_Minor';
import { C_SHARP_MINOR_KEY } from './keys/C_Sharp_Minor';
import { G_SHARP_MINOR_KEY } from './keys/G_Sharp_Minor';
import { D_SHARP_MINOR_KEY } from './keys/D_Sharp_Minor';
import { Bb_MINOR_KEY } from './keys/Bb_Minor';
import { F_MINOR_KEY } from './keys/F_Minor';
import { C_MINOR_KEY } from './keys/C_Minor';
import { G_MINOR_KEY } from './keys/G_Minor';
import { D_MINOR_KEY } from './keys/D_Minor';

export * from './types';

export const CHORD_LIBRARY: Record<string, Key> = {
    'C Major': C_MAJOR_KEY,
    'G Major': G_MAJOR_KEY,
    'D Major': D_MAJOR_KEY,
    'A Major': A_MAJOR_KEY,
    'E Major': E_MAJOR_KEY,
    'B Major': B_MAJOR_KEY,
    'F# Major': F_SHARP_MAJOR_KEY,
    'Db Major': Db_MAJOR_KEY,
    'Ab Major': Ab_MAJOR_KEY,
    'Eb Major': Eb_MAJOR_KEY,
    'Bb Major': Bb_MAJOR_KEY,
    'F Major': F_MAJOR_KEY,
    'A Minor': A_MINOR_KEY,
    'E Minor': E_MINOR_KEY,
    'B Minor': B_MINOR_KEY,
    'F# Minor': F_SHARP_MINOR_KEY,
    'C# Minor': C_SHARP_MINOR_KEY,
    'G# Minor': G_SHARP_MINOR_KEY,
    'D# Minor': D_SHARP_MINOR_KEY,
    'Bb Minor': Bb_MINOR_KEY,
    'F Minor': F_MINOR_KEY,
    'C Minor': C_MINOR_KEY,
    'G Minor': G_MINOR_KEY,
    'D Minor': D_MINOR_KEY,
};
