import { create } from 'zustand'
import { Prescription } from '../types/types';

interface PrescriptionState {
  activePrescription: Prescription | null,
  setActivePrescription: (pres: Prescription) => void;
}

const useStore = create<PrescriptionState>()((set) => ({
  activePrescription: null,
  setActivePrescription: (pres) => set(() => ({ activePrescription: pres }))
}))

export default useStore;