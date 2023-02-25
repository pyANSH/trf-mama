import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    transition: all 0.50s linear;
  }
  `;

export const appTypography = {
	'displayLarge': {
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '52px',
			'line-height': '56px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '50px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '52px',
			'line-height': '56px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '50px'
			}
		},
		'bold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '700',
			'font-size': '52px',
			'line-height': '56px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '50px'
			}
		},
		'extraBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '800',
			'font-size': '52px',
			'line-height': '56px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '50px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '50px'
			}
		}
	},
	'displaySmall': {
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '44px',
			'line-height': '48px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '42px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '44px',
			'line-height': '48px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '42px'
			}
		},
		'bold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '700',
			'font-size': '44px',
			'line-height': '48px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '42px'
			}
		},
		'extraBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '800',
			'font-size': '44px',
			'line-height': '48px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '42px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '42px'
			}
		}
	},
	'h1': {
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '40px',
			'line-height': '48px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '38px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '40px',
			'line-height': '48px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '38px'
			}
		},
		'bold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '700',
			'font-size': '40px',
			'line-height': '48px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '38px'
			}
		},
		'extraBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '800',
			'font-size': '40px',
			'line-height': '48px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '38px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '38px'
			}
		}
	},
	'h2': {
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '36px',
			'line-height': '44px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '34px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '36px',
			'line-height': '44px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '34px'
			}
		},
		'bold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '700',
			'font-size': '36px',
			'line-height': '44px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '34px'
			}
		},
		'extraBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '800',
			'font-size': '36px',
			'line-height': '44px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '34px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '34px'
			}
		}
	},
	'h3': {
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '32px',
			'line-height': '40px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '30px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '32px',
			'line-height': '40px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '30px'
			}
		},
		'bold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '700',
			'font-size': '32px',
			'line-height': '40px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '30px'
			}
		},
		'extraBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '800',
			'font-size': '32px',
			'line-height': '40px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '30px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '30px'
			}
		}
	},
	'h4': {
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '28px',
			'line-height': '36px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '26px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '28px',
			'line-height': '36px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '26px'
			}
		},
		'bold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '700',
			'font-size': '28px',
			'line-height': '36px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '26px'
			}
		},
		'extraBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '800',
			'font-size': '28px',
			'line-height': '36px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '26px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '26px'
			}
		}
	},
	'h5': {
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '24px',
			'line-height': '32px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '22px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '24px',
			'line-height': '32px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '22px'
			}
		},
		'bold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '700',
			'font-size': '24px',
			'line-height': '32px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '22px'
			}
		},
		'extraBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '800',
			'font-size': '24px',
			'line-height': '32px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '22px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '22px'
			}
		}
	},
	'h6': {
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '20px',
			'line-height': '28px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '18px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '20px',
			'line-height': '28px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '18px'
			}
		},
		'bold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '700',
			'font-size': '20px',
			'line-height': '28px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '18px'
			}
		},
		'extraBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '800',
			'font-size': '20px',
			'line-height': '28px',
			'letter-spacing': '-0.02em',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '18px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '18px'
			}
		}
	},
	'paraLarge': {
		'regular': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '18px',
			'line-height': '28px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '16px'
			}
		},
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '18px',
			'line-height': '28px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '16px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '18px',
			'line-height': '28px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '16px'
			}
		},
		'underline': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '18px',
			'line-height': '28px',
			'text-decoration-line': 'underline',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '16px'
			}
		},
		'strikeTrough': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '18px',
			'line-height': '28px',
			'text-decoration-line': 'line-through',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '16px'
			}
		},
		'italic': {
			'font-family': 'Roboto',
			'font-style': 'italic',
			'font-weight': '400',
			'font-size': '18px',
			'line-height': '28px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '16px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '16px'
			}
		}
	},
	'paraMed': {
		'regular': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '16px',
			'line-height': '24px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		},
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '16px',
			'line-height': '24px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '16px',
			'line-height': '24px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		},
		'underline': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '16px',
			'line-height': '24px',
			'text-decoration-line': 'underline',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		},
		'strikeTrough': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '16px',
			'line-height': '24px',
			'text-decoration-line': 'line-through',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		},
		'italic': {
			'font-family': 'Roboto',
			'font-style': 'italic',
			'font-weight': '400',
			'font-size': '16px',
			'line-height': '24px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		}
	},
	'paraSmall': {
		'regular': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '14px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '13px'
			}
		},
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '14px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '13px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '14px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '13px'
			}
		},
		'underline': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '14px',
			'line-height': '20px',
			'text-decoration-line': 'underline',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '13px'
			}
		},
		'strikeTrough': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '14px',
			'line-height': '20px',
			'text-decoration-line': 'line-through',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '13px'
			}
		},
		'italic': {
			'font-family': 'Roboto',
			'font-style': 'italic',
			'font-weight': '400',
			'font-size': '14px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '13px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '13px'
			}
		}
	},
	'paraXSmall': {
		'regular': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '12px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '12px'
			}
		},
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '12px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '12px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '12px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '12px'
			}
		},
		'underline': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '12px',
			'line-height': '20px',
			'text-decoration-line': 'underline',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '12px'
			}
		},
		'strikeTrough': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '12px',
			'line-height': '20px',
			'text-decoration-line': 'line-through',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '12px'
			}
		},
		'italic': {
			'font-family': 'Roboto',
			'font-style': 'italic',
			'font-weight': '400',
			'font-size': '12px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '12px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '12px'
			}
		}
	},
	'paraXXSmall': {
		'regular': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '8px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '8px'
			}
		},
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '8px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '8px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '8px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '8px'
			}
		},
		'underline': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '8px',
			'line-height': '20px',
			'text-decoration-line': 'underline',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '8px'
			}
		},
		'strikeTrough': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '8px',
			'line-height': '20px',
			'text-decoration-line': 'line-through',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '8px'
			}
		},
		'italic': {
			'font-family': 'Roboto',
			'font-style': 'italic',
			'font-weight': '400',
			'font-size': '8px',
			'line-height': '20px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '8px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '8px'
			}
		}
	},
	'overlineLarge': {
		'font-family': 'Roboto',
		'font-style': 'normal',
		'font-weight': '600',
		'font-size': '14px',
		'line-height': '18px',
		'letter-spacing': '1px',
		'text-transform': 'uppercase',
		'@media (min-width: 1536px) and (max-width: 1919.9px)': {
			'font-size': '13px'
		},
		'@media (min-width: 1336px) and (max-width: 1535.9px)': {
			'font-size': '13px'
		},
		'@media (min-width: 1180px) and (max-width: 1335.9px)': {
			'font-size': '13px'
		},
		'@media (min-width: 768px) and (max-width: 1179.9px)': {
			'font-size': '13px'
		},
		'@media (min-width: 480.9px) and (max-width: 767.9px)': {
			'font-size': '13px'
		},
		'@media (min-width: 360px) and (max-width: 480px)': {
			'font-size': '13px'
		}
	},
	'overlineSemiBold': {
		'font-family': 'Roboto',
		'font-size': '14px',
		'font-weight': '600',
		'line-height': '18px',
		'letter-spacing': '1px',
		'text-align': 'center',
	},
	'overlineSmall': {
		'font-family': 'Roboto',
		'font-style': 'normal',
		'font-weight': '600',
		'font-size': '12px',
		'line-height': '16px',
		'letter-spacing': '1px',
		'text-transform': 'uppercase',
		'@media (min-width: 1536px) and (max-width: 1919.9px)': {
			'font-size': '12px'
		},
		'@media (min-width: 1336px) and (max-width: 1535.9px)': {
			'font-size': '12px'
		},
		'@media (min-width: 1180px) and (max-width: 1335.9px)': {
			'font-size': '12px'
		},
		'@media (min-width: 768px) and (max-width: 1179.9px)': {
			'font-size': '12px'
		},
		'@media (min-width: 480.9px) and (max-width: 767.9px)': {
			'font-size': '12px'
		},
		'@media (min-width: 360px) and (max-width: 480px)': {
			'font-size': '12px'
		}
	},
	'overlineXSmall': {
		'font-family': 'Roboto',
		'font-style': 'normal',
		'font-weight': '600',
		'font-size': '10px',
		'line-height': '14px',
		'letter-spacing': '0.01em',
		'text-transform': 'uppercase',
		'@media (min-width: 1536px) and (max-width: 1919.9px)': {
			'font-size': '10px'
		},
		'@media (min-width: 1336px) and (max-width: 1535.9px)': {
			'font-size': '10px'
		},
		'@media (min-width: 1180px) and (max-width: 1335.9px)': {
			'font-size': '10px'
		},
		'@media (min-width: 768px) and (max-width: 1179.9px)': {
			'font-size': '10px'
		},
		'@media (min-width: 480.9px) and (max-width: 767.9px)': {
			'font-size': '10px'
		},
		'@media (min-width: 360px) and (max-width: 480px)': {
			'font-size': '10px'
		}
	},
	'filterNumber': {
		'font-family': 'Roboto',
		'font-size': '8px',
		'font-weight': '600',
		'line-height': '9px',
		'letter-spacing': '0.01em',
		'text-align': 'left',
	},
	'Title2': {
		'font-family': 'Roboto',
		'font-style': 'normal',
		'font-weight': '500',
		'font-size': '16px',
		'line-height': '130%',
		'letter-spacing': '-0.02em',
	},
	'Title3': {
		'font-family': 'Roboto',
		'font-style': 'normal',
		'font-weight': '500',
		'font-size': '10px',
		'line-height': '150%',
	},
	'Para2': {
		'regular': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '11px',
			'line-height': '24px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		},
		'med': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '500',
			'font-size': '11px',
			'line-height': '24px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		},
		'semiBold': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '600',
			'font-size': '11px',
			'line-height': '24px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		},
		'underline': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '11px',
			'line-height': '24px',
			'text-decoration-line': 'underline',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		},
		'strikeTrough': {
			'font-family': 'Roboto',
			'font-style': 'normal',
			'font-weight': '400',
			'font-size': '11px',
			'line-height': '24px',
			'text-decoration-line': 'line-through',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		},
		'italic': {
			'font-family': 'Roboto',
			'font-style': 'italic',
			'font-weight': '400',
			'font-size': '11px',
			'line-height': '24px',
			'@media (min-width: 1536px) and (max-width: 1919.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1336px) and (max-width: 1535.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 1180px) and (max-width: 1335.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 768px) and (max-width: 1179.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 480.9px) and (max-width: 767.9px)': {
				'font-size': '14px'
			},
			'@media (min-width: 360px) and (max-width: 480px)': {
				'font-size': '14px'
			}
		}
	},

};


