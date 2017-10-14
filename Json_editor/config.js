{
	"ws": {
		"port": 5000,
		"clientport": 3000,
		"hostname": "127.0.0.1"
	},
	"bot": {
		"debug": true,
		"BOT_DELAY": 1,
		"interval_ticker_update": 25000,
		"period_storage_ticker": 2000,
		"timeout_buy": 60000,
		"timeout_sell": 60000,
		"TV_GAIN": 0.6,
		"TV_TRADING_LIMIT_BUY": 0.001,
		"TV_PYRAMID": true,
		"TV_TRADING_LIMIT_SELL": 0.001,
		"TV_PROTECTION": true,
		"RETRY_TV_ORDER": false,
		"VERBOSE": true,
		"WATCH_MODE": false
	},
	"exchanges": {
		"bittrex": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		},
		"cryptopia": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		},
		"kraken": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		},
		"poloniex": {
			"key": "YOUR_API_KEY_HERE",
			"secret": "YOUR_SECRET_KEY_HERE"
		}
	},
	"pairs": {
		"bittrexx": {
			"BTC-LTC": {
				"strategy": "bb"
			},
			"BTC-ETH": {
				"strategy": "bb"
			},
			"BTC-XRP": {
				"strategy": "bb"
			}
		},
		"poloniex": {
			"BTC-LTCC": {
				"strategy": "bb"
			},
			"BTC-ETH": {
				"strategy": "bbb"
			},
			"BTC-XRP": {
				"strategy": "bb"
			}
		},
		"kraken": {
			"BTC-LTC": {
				"strategy": "bb"
			},
			"BTC-ETH": {
				"strategy": "bb"
			},
			"BTC-XRP": {
				"strategy": "bb"
			}
		},
		"cryptopia": {
			"BTC-LTC": {
				"strategy": "bb"
			},
			"BTC-ETH": {
				"strategy": "bb"
			},
			"BTC-XRP": {
				"strategy": "bb"
			}
		}
		
	},
	"imap_listener": {
		"enabled": true,
		"authorized_froms": "[\"noreply@tradingview.com\"]",
		"user": "YOUR_EMAIL_HERE",
		"password": "YOUR_PASSOWORD_HERE",
		"host": "imap.gmail.com",
		"port": 993,
		"tls": true,
		"tlsOptions": {
			"rejectUnauthorized": false
		}
	},
	"strategies": {
		"bb": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001

			
		},
		"gain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001

			
		},
		"pp": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001


			
		},
		"stepgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001


			
		},
		"bbgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"gainbb": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"bbstepgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"stepgainbb": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"bbpp": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"ppbb": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"gainstepgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"stepgaingain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"gainpp": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"ppgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"stepgainpp": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		},
		"ppstepgain": {
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"LASTPOINTS": 5,
			"AVGPOINTS": 250,
			"AVGMINIMUM": 0.00000001,
			"PP_BUY": 0.00000001,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
			"MIN_VOLUME_TO_BUY": 0.0001,
			"MIN_VOLUME_TO_SELL": 0.0001
		}

	},
	"optionals": {
		"toOverride": {
			"BOUGHT_PRICE": 0.104744
		}
	}
}