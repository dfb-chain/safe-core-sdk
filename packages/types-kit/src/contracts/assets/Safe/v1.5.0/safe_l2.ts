// Source: https://github.com/safe-global/safe-deployments/blob/main/src/assets/v1.5.0/safe_l2.json
// Note: Safe 1.5.0 is backward compatible with 1.4.1, reusing 1.4.1 ABI for now
// This can be updated when the official 1.5.0 ABI is available
import safe_1_4_1_ContractArtifacts from '../v1.4.1/safe_l2'

export default {
  ...safe_1_4_1_ContractArtifacts,
  version: '1.5.0'
} as const
